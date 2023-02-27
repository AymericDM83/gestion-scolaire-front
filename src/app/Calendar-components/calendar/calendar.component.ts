import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  TemplateRef,
} from '@angular/core';
import {
  CalendarOptions,
  DateSelectArg,
  EventApi,
  EventClickArg,
} from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { createEventId, INITIAL_EVENTS } from './event-utils';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from '../../../model/subject.model';
import { Professor } from '../../../model/professor.model';
import { EventInfo } from 'src/model/eventInfo.model';
import { ProfessorService } from '../../services/professor.service';
import { SubjectService } from '../../services/subject.service';
import { CalenderService } from '../../services/calender.service';
import { SubjectEnumerationColors } from '../../../model/subject.enumeration.colors';
import { AddEventInCalanderComponent } from '../add-event-in-calendar/add-event-in-calendar.component';
import { AddEventService } from '../../services/add-event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calander',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  calendarVisible = false;
  calendeForm!: FormGroup;
  eId = this.activatedRoute.snapshot.paramMap.get('eId');

  subjects: Subject[] = [];
  professors: Professor[] = [];
  eventsInfos: EventInfo[] = [];
  eventInfo!: EventInfo;
  currentEvents: EventApi[] = [];
  currentModal: NgbModalRef | undefined;

  get subjectsFormArray() {
    return this.calendeForm.controls['subjects'] as FormArray;
  }
  get professorFormArray() {
    return this.calendeForm.controls['professors'] as FormArray;
  }
  // @ts-ignore
  calendarOptions: CalendarOption = {
    plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
    },
    initialView: 'dayGridMonth',
    initialEvents: INITIAL_EVENTS,
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this),
  };

  constructor(
    private changeDetector: ChangeDetectorRef,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private professorService: ProfessorService,
    private subjectService: SubjectService,
    private calenderService: CalenderService,
    private addEventService: AddEventService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.calendeForm = this.formBuilder.group({
      day: Date,
      startHour: Date,
      endHour: Date,
      professors: this.formBuilder.array([]),
      subjects: this.formBuilder.array([]),
    });
    this.subjectService.findAll().subscribe((allsubjects) => {
      this.subjects = allsubjects;
    });
    this.professorService.findAll().subscribe((allprofessors) => {
      this.professors = allprofessors;
    });

    this.addEventService
      .findAll()
      .subscribe((allevents) => (this.eventsInfos = allevents));
  }

  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    this.openAddEventModal(selectInfo);
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (
      confirm(
        `voulez vous vraiment supprimer ce programme ? '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
    this.changeDetector.detectChanges();
  }

  openAddEventModal(dateInfo: DateSelectArg) {
    this.currentModal = this.modalService.open(AddEventInCalanderComponent, {
      backdrop: 'static',
    });

    this.currentModal.componentInstance.dateInfo = dateInfo;

    this.currentModal.result.then((EventInfo) => {
      if (EventInfo) {
        const calendarApi = dateInfo.view.calendar;
        calendarApi.unselect();
        this.addEventService
          .add(this.eventInfo)
          .subscribe((allevents) => (this.eventInfo = allevents));
        calendarApi.addEvent({
          id: createEventId(),
          title: EventInfo.subject,
          start: dateInfo.start,
          end: dateInfo.end,
          allDay: dateInfo.allDay,
        });
      }
    });
  }

  addSubject() {
    const subjectForm = this.formBuilder.group({
      id: [null, Validators.required],
    });
    this.subjectsFormArray.push(subjectForm);
  }
  deletSubject(subjectIndex: number) {
    this.subjectsFormArray.removeAt(subjectIndex);
  }

  addProfessor() {
    const professorForm = this.formBuilder.group({
      id: [null, Validators.required],
    });
    this.professorFormArray.push(professorForm);
  }
  deletProfessor(ProfessorIndex: number) {
    this.professorFormArray.removeAt(ProfessorIndex);
  }
}
