import {Component, Input} from '@angular/core';
import {Professor} from "../../../model/professor.model";

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.scss']
})
export class ProfessorComponent {
@Input()
  professor!: Professor;
}
