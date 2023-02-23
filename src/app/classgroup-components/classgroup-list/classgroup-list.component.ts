import {Component, OnInit} from '@angular/core';
import {Classgroup} from "../../../model/classgroup.model";
import {ClassgroupService} from "../../services/classgroup.service";

@Component({
  selector: 'app-classgroup-list',
  templateUrl: './classgroup-list.component.html',
  styleUrls: ['./classgroup-list.component.scss']
})
export class ClassgroupListComponent implements OnInit{

  selectedClassgroup: Classgroup | undefined;
  classgroups: Classgroup[] = [];

  constructor(private productService: ClassgroupService) {}

  ngOnInit(): void {
    this.productService.findAll()
      .subscribe(cgs => this.classgroups = cgs)
  }


}
