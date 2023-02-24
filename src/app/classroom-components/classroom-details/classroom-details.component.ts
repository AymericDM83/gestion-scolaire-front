import {Component, OnInit} from '@angular/core';
import {Classroom} from "../../../model/classroom.model";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {ActivatedRoute, Router} from "@angular/router";
import {ProfessorService} from "../../professor.service";
import {ClassroomService} from "../../classroom.service";

@Component({
  selector: 'app-classroom-details',
  templateUrl: './classroom-details.component.html',
  styleUrls: ['./classroom-details.component.scss']
})
export class ClassroomDetailsComponent implements OnInit{
  classroom!: Classroom
  currentModal: NgbModalRef | undefined;

  constructor(private activatedRoot: ActivatedRoute,
              private router: Router,
              private modalService: NgbModal,
              private classroomService: ClassroomService
  ){}

  ngOnInit(): void {
    const id = this.activatedRoot.snapshot.paramMap.get('id')
    if(id){
      this.classroomService.findOne(Number(id)).subscribe( classroom =>this.classroom = classroom)
    }
  }
  removProduct() {
    this.classroomService.remove(this.classroom.id).subscribe(()=> {
      this.currentModal?.close()
      this.router.navigateByUrl(`/classrooms`);
    })
  }
  open(content: any) {
    this.currentModal = this.modalService.open(content, {
      backdrop: 'static'
    })
  }


}
