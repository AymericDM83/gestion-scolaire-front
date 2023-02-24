import { Component, OnInit } from '@angular/core';
import { Subject } from '../../../model/subject.model';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-subject-details',
  templateUrl: './subject-details.component.html',
  styleUrls: ['./subject-details.component.scss'],
})
export class SubjectDetailsComponent implements OnInit {
  subject!: Subject;
  currentModal: NgbModalRef | undefined;
  constructor(
    private activatedRoot: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private subjectService: SubjectService
  ) {}
  eId = this.activatedRoot.snapshot.paramMap.get('eId');
  ngOnInit(): void {
    const sId = this.activatedRoot.snapshot.paramMap.get('sId');
    if(sId) {
      this.subjectService
        .findOne(Number(sId))
        .subscribe((subject) => (this.subject = subject));
    }
  }
  removProduct() {
    const eId = this.activatedRoot.snapshot.paramMap.get('eId');
    this.subjectService.remove(this.subject.id).subscribe(() => {
      this.currentModal?.close();
      this.router.navigateByUrl(`/establishments/${eId}/subjects`);
    });
  }
  open(content: any) {
    this.currentModal = this.modalService.open(content, {
      backdrop: 'static',
    });
  }
}
