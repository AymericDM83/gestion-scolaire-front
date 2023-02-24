import { Component, Input } from '@angular/core';
import { Establishment } from 'src/model/establishment.model';

@Component({
  selector: 'app-establishment',
  templateUrl: './establishment.component.html',
  styleUrls: ['./establishment.component.scss'],
})
export class EstablishmentComponent {
  @Input()
  establishment!: Establishment;
}
