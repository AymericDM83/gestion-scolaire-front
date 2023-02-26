import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Classroom } from '../../../model/classroom.model';
import { ClassroomService } from '../../services/classroom.service';

@Component({
  selector: 'app-classroom-list',
  templateUrl: './classroom-list.component.html',
  styleUrls: ['./classroom-list.component.scss'],
})
export class ClassroomListComponent implements OnInit {
  classrooms: Classroom[] = [];
  eId = this.activatedRoute.snapshot.paramMap.get('eId');

  constructor(
    private classroomService: ClassroomService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('eId') || '';
    if (id !== '') {
      this.classroomService
        .findByEstablishment(+id)
        .subscribe((allclassrooms) => (this.classrooms = allclassrooms));
    }
  }
}
