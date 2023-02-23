import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {Classgroup} from "../../../model/classgroup.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-classgroup-details',
  templateUrl: './classgroup-details.component.html',
  styleUrls: ['./classgroup-details.component.scss']
})
export class ClassgroupDetailsComponent implements OnInit{

  @Input()
  classgroup!:Classgroup;

  @Output()
  out = new EventEmitter<Classgroup>();

  constructor(private router: Router) {
  }

  @HostListener('click')
  clickOnCompo(){
    this.router.navigate(['/classgroups/', this.classgroup.id])
  }

  ngOnInit(): void {
  }


}
