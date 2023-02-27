import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassroomService } from '../../services/classroom.service';

@Component({
  selector: 'app-add-classroom',
  templateUrl: './add-classroom.component.html',
  styleUrls: ['./add-classroom.component.scss'],
})
export class AddClassroomComponent implements OnInit {
  classForm!: FormGroup;
  formSubmitted = false;
  eId = this.activatedRoute.snapshot.paramMap.get('eId');

  constructor(
    private formBuilder: FormBuilder,
    private classroomService: ClassroomService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.classForm = this.formBuilder.group({
      name: ['', Validators.required],
      capacity: [0, [Validators.required, Validators.min(10)]],
      establishment: {
        id: this.eId,
      },
    });
  }
  submitForm() {
    const eId = this.activatedRoute.snapshot.paramMap.get('eId');
    this.formSubmitted = true;
    if (this.classForm.valid) {
      this.classroomService
        .add(this.classForm.value)
        .subscribe(() =>
          this.router.navigateByUrl(`establishments/${eId}/classrooms`)
        );
    }
  }
}
