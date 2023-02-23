import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProfessorService} from "../../professor.service";
import {Router} from "@angular/router";
import {Subject} from "../../../model/subject.model";
import {Classgroup} from "../../../model/classgroup.model";
import {Establishment} from "../../../model/establishment.model";

@Component({
  selector: 'app-add-professor',
  templateUrl: './add-professor.component.html',
  styleUrls: ['./add-professor.component.scss']
})
export class AddProfessorComponent implements  OnInit{
  professorForm!: FormGroup
  formSubmitted = false;
  constructor(private formBuilder: FormBuilder,
              private professorService: ProfessorService,
              private router: Router

  ) {
  }
  ngOnInit(): void {
    this.professorForm = this.formBuilder.group({
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
     /* subjects: this.formBuilder.group({id : null}),
      principalClass: this.formBuilder.group({id:null}),
      establishment: this.formBuilder.group({id: null})*/
      }

    )
  }

  submitForm() {
    this.formSubmitted = true
    if (this.professorForm.valid) {
      this.professorService.add(this.professorForm.value)
        .subscribe(p => this.router.navigateByUrl(`/professors`))
    }
  }
}
