import { Component, OnInit } from '@angular/core';
import { EstablishmentService } from 'src/app/services/establishment.service';
import { Establishment } from 'src/model/establishment.model';

@Component({
  selector: 'app-establishment-list',
  templateUrl: './establishment-list.component.html',
  styleUrls: ['./establishment-list.component.scss'],
})
export class EstablishmentListComponent implements OnInit {
  establishments: Establishment[] = [];

  constructor(private ests: EstablishmentService) {}
  ngOnInit(): void {
    this.ests.getAll().subscribe((e) => (this.establishments = e));
  }
}
