import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { SubjectEnumerationColors } from '../../../model/subject.enumeration.colors';
import { Professor } from '../../../model/professor.model';
import { ProfessorService } from 'src/app/services/professor.service';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.scss'],
})
export class AddSubjectComponent implements OnInit {
  subjectForm!: FormGroup;
  formSubmitted = false;
  professors: Professor[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private subjectService: SubjectService,
    private professorService: ProfessorService,
    private router: Router,
  private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subjectForm = this.formBuilder.group({
      name: ['', Validators.required],
      color: ['', Validators.required],
      professor: this.formBuilder.group({
        id: [null],
      }),
    });
    this.professorService
      .findAll()
      .subscribe((Subjectprofessor) => (this.professors = Subjectprofessor));
  }
  submitForm() {
    const eId = this.activatedRoute.snapshot.paramMap.get('eId');
    this.formSubmitted = true;

    if (this.subjectForm.valid) {
      this.subjectService
        .add(this.subjectForm.value)
        .subscribe((i) => this.router.navigateByUrl(`establishments/${eId}/subjects`));
    }
  }
}
