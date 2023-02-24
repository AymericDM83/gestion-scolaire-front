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
  ngOnInit(): void {
    const id = this.activatedRoot.snapshot.paramMap.get('id');
    if (id) {
      this.subjectService
        .findOne(Number(id))
        .subscribe((subject) => (this.subject = subject));
    }
  }
  removProduct() {
    this.subjectService.remove(this.subject.id).subscribe(() => {
      this.currentModal?.close();
      this.router.navigateByUrl(`/subjects`);
    });
  }
  open(content: any) {
    this.currentModal = this.modalService.open(content, {
      backdrop: 'static',
    });
  }
}
