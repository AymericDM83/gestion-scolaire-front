import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfessorService } from '../../services/professor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassgroupService } from '../../services/classgroup.service';
import { Professor } from '../../../model/professor.model';
import { Establishment } from '../../../model/establishment.model';

@Component({
  selector: 'app-add-classgroup',
  templateUrl: './add-classgroup.component.html',
  styleUrls: ['./add-classgroup.component.scss'],
})
export class AddClassgroupComponent implements OnInit {
  classgroupForm!: FormGroup;
  formSubmitted = false;
  professors: Professor[] = [];
  establishments: Establishment[] = [];
  eId = this.activatedRoute.snapshot.paramMap.get('eId');

  // là j'ai préparé un tableau de profs et un profService pour récupérer la liste des Profs
  // parce que j'en ai besoin pour mon Select dans le formulaire. Je pense faire pareil
  // pour les Establishments
  constructor(
    private formBuilder: FormBuilder,
    private classgroupService: ClassgroupService,
    private router: Router,
    private professorService: ProfessorService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.classgroupForm = this.formBuilder.group({
      name: ['', Validators.required],
      principalProfessor: this.formBuilder.group({
        id: '',
      }),
      establishment: {
        id: this.eId,
      },
    });
    const eId = this.activatedRoute.snapshot.paramMap.get('eId') || '';
    if (eId !== '') {
      this.professorService
        .findByEstablishment(+eId)
        .subscribe((allProfessors) => {
          this.professors = allProfessors;
        });
    }
  }

  submitForm() {
    const eId = this.activatedRoute.snapshot.paramMap.get('eId');
    this.formSubmitted = true;
    if (this.classgroupForm.valid) {
      this.classgroupService.add(this.classgroupForm.value).subscribe(() => {
        this.router.navigateByUrl(`establishments/${eId}/classgroups`);
      });
    }
  }
}
