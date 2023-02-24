import { Component, OnInit } from '@angular/core';
import { Classroom } from '../../../model/classroom.model';
import { ClassroomService } from '../../services/classroom.service';

@Component({
  selector: 'app-classroom-list',
  templateUrl: './classroom-list.component.html',
  styleUrls: ['./classroom-list.component.scss'],
})
export class ClassroomListComponent implements OnInit {
  classrooms: Classroom[] = [];

  constructor(private classroomService: ClassroomService) {}
  ngOnInit(): void {
    this.classroomService
      .findAll()
      .subscribe((allclassrooms) => (this.classrooms = allclassrooms));
  }
}
