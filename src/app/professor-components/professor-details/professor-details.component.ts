import {Component, OnInit} from '@angular/core';
import {Professor} from "../../../model/professor.model";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {ActivatedRoute, Router} from "@angular/router";
import {ProfessorService} from "../../professor.service";

@Component({
  selector: 'app-professor-details',
  templateUrl: './professor-details.component.html',
  styleUrls: ['./professor-details.component.scss']
})
export class ProfessorDetailsComponent  implements OnInit{
  professor!: Professor
  currentModal: NgbModalRef | undefined;
  constructor(private activatedRoot: ActivatedRoute,
              private router: Router,
              private modalService: NgbModal,
              private professorService: ProfessorService

  ){}
  ngOnInit(): void {
    const id = this.activatedRoot.snapshot.paramMap.get('id')
    if(id){
      this.professorService.findOne(Number(id)).subscribe( professor =>this.professor = professor)
    }
  }
  removProduct() {
    this.professorService.remove(this.professor.id).subscribe(()=> {
      this.currentModal?.close()
      this.router.navigateByUrl(`/professors`);
    })
  }

  open(content: any) {
    this.currentModal = this.modalService.open(content, {
      backdrop: 'static'
    })
  }

}
