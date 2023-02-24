import { Component, OnInit } from '@angular/core';
import { Professor } from '../../../model/professor.model';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfessorService } from '../../services/professor.service';
import { EstablishmentService } from 'src/app/services/establishment.service';
import { Establishment } from 'src/model/establishment.model';

@Component({
  selector: 'app-professor-details',
  templateUrl: './professor-details.component.html',
  styleUrls: ['./professor-details.component.scss'],
})
export class ProfessorDetailsComponent implements OnInit {
  professor!: Professor;
  currentModal: NgbModalRef | undefined;
  establishment!: Establishment;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private professorService: ProfessorService,
    private establishmentService: EstablishmentService
  ) {}

  eId = this.activatedRoute.snapshot.paramMap.get('eId');

  ngOnInit(): void {
    const pId = this.activatedRoute.snapshot.paramMap.get('pId');
    console.log(pId);

    if (pId) {
      this.professorService
        .findOne(Number(pId))
        .subscribe((professor) => (this.professor = professor));
    }
  }
  removProduct() {
    const eId = this.activatedRoute.snapshot.paramMap.get('eId');
    this.professorService.remove(this.professor.id).subscribe(() => {
      this.currentModal?.close();
      this.router.navigateByUrl(`/establishments/${eId}/professors`);
    });
  }

  open(content: any) {
    this.currentModal = this.modalService.open(content, {
      backdrop: 'static',
    });
  }
}
