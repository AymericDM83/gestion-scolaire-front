import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  TemplateRef,
  Input,
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
import {
  NgbModal,
  NgbModalRef,
  NgbActiveModal,
} from '@ng-bootstrap/ng-bootstrap';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from '../../../model/subject.model';
import { Professor } from '../../../model/professor.model';
import { ProfessorService } from '../../services/professor.service';
import { SubjectService } from '../../services/subject.service';
import { CalenderService } from '../../services/calender.service';
import { SubjectEnumerationColors } from '../../../model/subject.enumeration.colors';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event-in-calendar.component.html',
  styleUrls: ['./add-event-in-calendar.component.scss'],
})
export class AddEventInCalendarComponent implements OnInit {
  @Input() dateInfo: DateSelectArg | undefined;
  calendeForm!: FormGroup;

  professors: Professor[] = [];

  constructor(
    private changeDetector: ChangeDetectorRef,
    private activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private professorService: ProfessorService
  ) {}

  ngOnInit(): void {
    console.log(this.dateInfo);
    this.calendeForm = this.formBuilder.group({
      day: [this.dateInfo?.start, Validators.required],
      startHour: this.dateInfo?.start.getHours(),
      endHour: this.dateInfo?.end.getHours(),
      professor: [null, Validators.required],
      subject: [null, Validators.required],
    });
    this.professorService.findAll().subscribe((allprpfessors) => {
      this.professors = allprpfessors;
    });
  }

  validateForm() {
    console.log(this.calendeForm.value);
    if (this.calendeForm.valid) {
      this.activeModal.close(this.calendeForm.value);
    }
  }

  closeModal() {
    this.activeModal.dismiss();
  }

  getSubjectByProfId() {
    return (
      this.professors.find(
        (prof) => prof.id == this.calendeForm.get('professor')?.value
      )?.subjects || []
    );
  }
}
