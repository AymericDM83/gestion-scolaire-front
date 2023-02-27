import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassgroupService } from 'src/app/services/classgroup.service';
import { ClassroomService } from 'src/app/services/classroom.service';
import { EstablishmentService } from 'src/app/services/establishment.service';
import { ProfessorService } from 'src/app/services/professor.service';
import { Classgroup } from 'src/model/classgroup.model';
import { Classroom } from 'src/model/classroom.model';
import { Establishment } from 'src/model/establishment.model';
import { Professor } from 'src/model/professor.model';


@Component({
  selector: 'app-establishment-details',
  templateUrl: './establishment-details.component.html',
  styleUrls: ['./establishment-details.component.scss'],
})
export class EstablishmentDetailsComponent implements OnInit {
  establishment!: Establishment;
  classgroups: Classgroup[] = [];
  classrooms: Classroom[] = [];
  professors: Professor[] = [];

  professors: Professor[] = [];
  classrooms: Classroom[] = [];
  classgroups: Classgroup[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private ests: EstablishmentService,
    private router: Router,
    private professorService: ProfessorService,
    private classroomsService: ClassroomService,
    private classgroupsService: ClassgroupService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('eId') || '';
    if (id !== '') {
      this.ests.getOne(+id).subscribe((e) => (this.establishment = e));
      this.professorService
        .findByEstablishment(+id)
        .subscribe((p) => (this.professors = p));
      this.classroomsService
        .findByEstablishment(+id)
        .subscribe((c) => (this.classrooms = c));
      this.classgroupsService
        .findByEstablishment(+id)
        .subscribe((cg) => (this.classgroups = cg));
    }
  }

  deleteOne() {
    const id = this.activatedRoute.snapshot.paramMap.get('eId') || '';
    if (id !== '') {
      this.ests.deleteOne(+id).subscribe(() => this.router.navigateByUrl('/'));
    }
  }
}
