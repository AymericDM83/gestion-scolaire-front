import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';
import { Subject } from '../../../model/subject.model';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss'],
})
export class SubjectListComponent implements OnInit {
  subjects: Subject[] = [];
  eId = this.activatedRoute.snapshot.paramMap.get('eId');

  constructor(
    private subjectService: SubjectService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.subjectService
      .findAll()
      .subscribe((allSubjects) => (this.subjects = allSubjects));
  }
}
