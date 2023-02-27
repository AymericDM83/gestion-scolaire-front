import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProfessorService} from '../../services/professor.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SubjectService} from 'src/app/services/subject.service';
import {Subject} from "../../../model/subject.model";

@Component({
  selector: 'app-add-professor',
  templateUrl: './add-professor.component.html',
  styleUrls: ['./add-professor.component.scss'],
})
export class AddProfessorComponent implements OnInit {
  professorForm!: FormGroup;
  formSubmitted = false;
  subjects: Subject[] = [];
  eId = this.activatedRoute.snapshot.paramMap.get('eId');

  get subjectsFormArray() {
    return this.professorForm.controls["subjects"] as FormArray;
  }


  constructor(
    private formBuilder: FormBuilder,
    private professorService: ProfessorService,
    private subjectService: SubjectService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.professorForm = this.formBuilder.group({
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      establishment: {
        id: this.eId,
      },
      /* subjects: this.formBuilder.group({id : null}),*/
      subjects: this.formBuilder.array([])
    });
    this.subjectService.findAll().subscribe(allsubjects => {
      this.subjects = allsubjects
    })
  }
  submitForm() {
    const eId = this.activatedRoute.snapshot.paramMap.get('eId');
    this.formSubmitted = true;
    if (this.professorForm.valid) {
      this.professorService
        .add(this.professorForm.value)
        .subscribe((p) =>
          this.router.navigateByUrl(`establishments/${eId}/professors`)
        );
    }
  }

   addSubject() {
     const subjectForm = this.formBuilder.group({
       id: [null, Validators.required],
     })
     this.subjectsFormArray.push(subjectForm)
   }
   deletSubject(subjectIndex: number ){
     this.subjectsFormArray.removeAt(subjectIndex);
   }
}
