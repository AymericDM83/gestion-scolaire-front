import { Component, OnInit } from '@angular/core';
import { Classroom } from '../../../model/classroom.model';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassroomService } from '../../services/classroom.service';

@Component({
  selector: 'app-classroom-details',
  templateUrl: './classroom-details.component.html',
  styleUrls: ['./classroom-details.component.scss'],
})
export class ClassroomDetailsComponent implements OnInit {
  classroom!: Classroom;
  currentModal: NgbModalRef | undefined;

  constructor(
    private activatedRoot: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private classroomService: ClassroomService
  ) {}
  eId = this.activatedRoot.snapshot.paramMap.get('eId');
  ngOnInit(): void {
    const crId = this.activatedRoot.snapshot.paramMap.get('crId');
    if (crId) {
      this.classroomService
        .findOne(Number(crId))
        .subscribe((classroom) => (this.classroom = classroom));
    }
  }
  removProduct() {
    const eId = this.activatedRoot.snapshot.paramMap.get('eId');
    this.classroomService.remove(this.classroom.id).subscribe(() => {
      this.currentModal?.close();
      this.router.navigateByUrl(`/establishments/${eId}/classrooms`);
    });
  }
  open(content: any) {
    this.currentModal = this.modalService.open(content, {
      backdrop: 'static',
    });
  }
}
