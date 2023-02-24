import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EstablishmentService } from 'src/app/services/establishment.service';

@Component({
  selector: 'app-add-establishment',
  templateUrl: './add-establishment.component.html',
  styleUrls: ['./add-establishment.component.scss'],
})
export class AddEstablishmentComponent implements OnInit {
  ourForm!: FormGroup;

  formSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private ests: EstablishmentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.ourForm = this.fb.group({
      name: ['', [Validators.required]],
      adress: ['', Validators.required],
      type: ['', Validators.required],
      phoneNumber: ['', Validators.required],
    });
  }

  submitForm() {
    this.formSubmitted = true;

    if (this.ourForm.valid) {
      this.ests
        .add(this.ourForm.value)
        .subscribe(() => this.router.navigateByUrl('/'));
    }
  }
}
