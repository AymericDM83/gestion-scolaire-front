import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstablishmentService } from 'src/app/services/establishment.service';
import { Establishment } from 'src/model/establishment.model';

@Component({
  selector: 'app-establishment-details',
  templateUrl: './establishment-details.component.html',
  styleUrls: ['./establishment-details.component.scss'],
})
export class EstablishmentDetailsComponent implements OnInit {
  establishment!: Establishment;
<<<<<<< Updated upstream
=======
  classgroups: Classgroup[] = [];
  classrooms: Classroom[] = [];
  professors: Professor[] = [];


>>>>>>> Stashed changes

  constructor(
    private activatedRoute: ActivatedRoute,
    private ests: EstablishmentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id') || '';
    if (id !== '') {
      this.ests.getOne(+id).subscribe((e) => (this.establishment = e));
    }
  }

  deleteOne() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') || '';
    if (id !== '') {
      this.ests.deleteOne(+id).subscribe(() => this.router.navigateByUrl('/'));
    }
  }
}
