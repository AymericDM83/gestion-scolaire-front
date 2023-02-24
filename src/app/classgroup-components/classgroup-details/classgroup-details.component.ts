import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {Classgroup} from "../../../model/classgroup.model";
import {ActivatedRoute, Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
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



  constructor(private router: Router,
              private activatedRoot: ActivatedRoute,
              private modalService: NgbModal,
              private classgroupService: ClassgroupService
  ) {
  }

  ngOnInit(): void {
    const id = this.activatedRoot.snapshot.paramMap.get('id')
    if(id){
      this.classgroupService.findOne(Number(id)).subscribe( classgroup =>this.classgroup = classgroup)
    }
  }


}
