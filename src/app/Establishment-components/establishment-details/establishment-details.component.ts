import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstablishmentService } from 'src/app/services/establishment.service';
import { Establishment } from 'src/model/establishment.model';
import {ClassgroupService} from "../../services/classgroup.service";
import {ClassroomService} from "../../services/classroom.service";
import {ProfessorService} from "../../services/professor.service";
import {Classgroup} from "../../../model/classgroup.model";
import {Classroom} from "../../../model/classroom.model";
import {Professor} from "../../../model/professor.model";

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

  constructor(
    private activatedRoute: ActivatedRoute,
    private ests: EstablishmentService,
    private classgroupService: ClassgroupService,
    private classroomService: ClassroomService,
    private professorService: ProfessorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const eId = this.activatedRoute.snapshot.paramMap.get('eId') || '';
    if (eId !== '') {
      this.ests.getOne(+eId).subscribe((e) => (this.establishment = e));
      this.classgroupService.findByEstablishment(+eId).subscribe(e => (this.classgroups = e))
      this.classroomService.findByEstablishment(+eId).subscribe(e => (this.classrooms = e))
      this.professorService.findByEstablishment(+eId).subscribe(allProfessors => (this.professors = allProfessors))
    }


  }

  deleteOne() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') || '';
    if (id !== '') {
      this.ests.deleteOne(+id).subscribe(() => this.router.navigateByUrl('/'));
    }
  }
}
