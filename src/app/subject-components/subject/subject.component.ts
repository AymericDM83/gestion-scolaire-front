import {Component, Input, OnInit} from '@angular/core';
import {Subject} from "../../../model/subject.model";
import {SubjectEnumerationColors} from "../../../model/subject.enumeration.colors";

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements  OnInit{
@Input()
  subject!: Subject;
  SubjectColor: string | undefined;

  ngOnInit(): void {
switch (this.subject.color){
  case SubjectEnumerationColors.BLUE:
    this.SubjectColor ="primary"
    break
  case SubjectEnumerationColors.GREEN:
    this.SubjectColor ="success"
    break
  case SubjectEnumerationColors.RED:
    this.SubjectColor ="danger"
    break
  case SubjectEnumerationColors.GREY:
    this.SubjectColor ="secondary"
break
  case SubjectEnumerationColors.LIGHTBLUE:
    this.SubjectColor ="info"
    break
  case SubjectEnumerationColors.YELLOW:
    this.SubjectColor="warning"
}
  }

}
