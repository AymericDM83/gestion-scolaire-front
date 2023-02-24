import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {Classgroup} from "../../../model/classgroup.model";
import {ActivatedRoute, Router} from "@angular/router";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {ProfessorService} from "../../services/professor.service";
import {ClassgroupService} from "../../services/classgroup.service";

@Component({
  selector: 'app-classgroup-details',
  templateUrl: './classgroup-details.component.html',
  styleUrls: ['./classgroup-details.component.scss']
})
export class ClassgroupDetailsComponent implements OnInit{

  @Input()
  classgroup!:Classgroup;
  currentModal: NgbModalRef | undefined;



  constructor(private router: Router,
              private activatedRoot: ActivatedRoute,
              private modalService: NgbModal,
              private classgroupService: ClassgroupService,


  ) {
  }
  eId = this.activatedRoot.snapshot.paramMap.get('eId');
  ngOnInit(): void {
    const cgId = this.activatedRoot.snapshot.paramMap.get('cgId')
    if(cgId){
      this.classgroupService.findOne(Number(cgId)).subscribe( classgroup =>this.classgroup = classgroup)
    }
  }


  removProduct() {
    const eId = this.activatedRoot.snapshot.paramMap.get('eId');
    this.classgroupService.remove(this.classgroup.id).subscribe(() => {
      this.currentModal?.close();
      this.router.navigateByUrl(`/establishments/${eId}/classgroups`);
    });

  }
  open(content: any) {
    this.currentModal = this.modalService.open(content, {
      backdrop: 'static',
    });
  }
}
