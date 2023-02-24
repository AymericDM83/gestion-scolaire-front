import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProfessorService} from "../../services/professor.service";
import {Router} from "@angular/router";
import {ClassgroupService} from "../../services/classgroup.service";
import {Professor} from "../../../model/professor.model";
import {Establishment} from "../../../model/establishment.model";

@Component({
  selector: 'app-add-classgroup',
  templateUrl: './add-classgroup.component.html',
  styleUrls: ['./add-classgroup.component.scss']
})
export class AddClassgroupComponent implements OnInit {

  classgroupForm!: FormGroup
  formSubmitted = false;
  professors: Professor[] = []
  establishments: Establishment[] = []

  // là j'ai préparé un tableau de profs et un profService pour récupérer la liste des Profs
  // parce que j'en ai besoin pour mon Select dans le formulaire. Je pense faire pareil
  // pour les Establishments
  constructor(private formBuilder: FormBuilder,
              private classgroupService: ClassgroupService,
              private router: Router,
              private professorService: ProfessorService
  ) {}

  ngOnInit(): void {
    this.classgroupForm = this.formBuilder.group({
        name: ['', Validators.required],
        principalProfessor:[],
        establishments:[],
      })
    // this.professorService.findAll().subscribe(allProfessors => this.professors = allProfessors)
    // Ligne à réactiver pour recevoir la liste des établissements disponibles
    //this.establishmentService.findAll().subscribe(allEstablishment => this.establishments = allEstablishment)
  }

  submitForm() {
    this.formSubmitted = true
    if (this.classgroupForm.valid) {
      this.classgroupService.add(this.classgroupForm.value)
        .subscribe(p => this.router.navigateByUrl(`/classgroups`))
    }
  }
}
