import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Professor } from '../../../model/professor.model';
import { ProfessorService } from '../../services/professor.service';

@Component({
  selector: 'app-professor-list',
  templateUrl: './professor-list.component.html',
  styleUrls: ['./professor-list.component.scss'],
})
export class ProfessorListComponent implements OnInit {
  professors: Professor[] = [];
  eId = this.activatedRoute.snapshot.paramMap.get('eId');
  constructor(
    private professorService: ProfessorService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    // METHODE GET BYESTABLISHMENT ---->
    const id = this.activatedRoute.snapshot.paramMap.get('eId') || '';

    if (id !== '') {
      this.professorService
        .findByEstablishment(+id)
        .subscribe((allProfessors) => {
          this.professors = allProfessors;
          console.log(allProfessors);
        });
    }
  }
}
