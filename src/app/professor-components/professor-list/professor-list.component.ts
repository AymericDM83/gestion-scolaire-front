import {Component, OnInit} from '@angular/core';
import {Professor} from "../../../model/professor.model";
import {ProfessorService} from "../../services/professor.service";

@Component({
  selector: 'app-professor-list',
  templateUrl: './professor-list.component.html',
  styleUrls: ['./professor-list.component.scss']
})
export class ProfessorListComponent implements OnInit{
  professors: Professor[] = []
  constructor(private professorService: ProfessorService) {
  }
  ngOnInit(): void {
    this.professorService.findAll().subscribe(allProfessors => this.professors = allProfessors)
  }

}
