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

  constructor(private router: Router) {
  }




}
