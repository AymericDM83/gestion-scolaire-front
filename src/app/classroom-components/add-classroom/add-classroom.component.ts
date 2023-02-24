import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
;
import {Router} from "@angular/router";
import {ClassroomService} from "../../classroom.service";

@Component({
  selector: 'app-add-classroom',
  templateUrl: './add-classroom.component.html',
  styleUrls: ['./add-classroom.component.scss']
})
export class AddClassroomComponent implements  OnInit{
  classForm!: FormGroup
  formSubmitted = false;
  constructor(private formBuilder: FormBuilder,
              private classroomService: ClassroomService,
              private router: Router

  ) {
  }
  ngOnInit(): void {
    this.classForm = this.formBuilder.group({

      name: ['', Validators.required],
      capacity: [0, [Validators.required, Validators.min(10)]],
    })
  }
  submitForm() {
    this.formSubmitted = true
    if (this.classForm.valid) {
      this.classroomService.add(this.classForm.value)
        .subscribe(p => this.router.navigateByUrl(`/classrooms`))
    }
  }
}
