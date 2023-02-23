import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {Classgroup} from "../../../model/classgroup.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-classgroup',
  templateUrl: './classgroup.component.html',
  styleUrls: ['./classgroup.component.scss']
})
export class ClassgroupComponent {

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



}
