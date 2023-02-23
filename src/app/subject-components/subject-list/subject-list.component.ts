import {Component, OnInit} from '@angular/core';
import {Subject} from "../../../model/subject.model";
import {SubjectService} from "../../subject.service";

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss']
})
export class SubjectListComponent implements OnInit{
  subjects: Subject[] =[]
  constructor(private subjectService: SubjectService) {
  }
  ngOnInit(): void {
    this.subjectService.findAll().subscribe(allSubjects =>this.subjects = allSubjects)
  }

}
