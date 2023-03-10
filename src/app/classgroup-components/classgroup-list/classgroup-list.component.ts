import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Classgroup } from '../../../model/classgroup.model';
import { ClassgroupService } from '../../services/classgroup.service';

@Component({
  selector: 'app-classgroup-list',
  templateUrl: './classgroup-list.component.html',
  styleUrls: ['./classgroup-list.component.scss'],
})
export class ClassgroupListComponent implements OnInit {
  selectedClassgroup: Classgroup | undefined;
  classgroups: Classgroup[] = [];
  eId = this.activatedRoute.snapshot.paramMap.get('eId');

  constructor(
    private classgroupService: ClassgroupService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('eId') || '';
    if (id !== '') {
      this.classgroupService
        .findByEstablishment(+id)
        .subscribe((cgs) => (this.classgroups = cgs));
    }
  }
}
