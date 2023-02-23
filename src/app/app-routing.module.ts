import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEstablishmentComponent } from './Establishment-components/add-establishment/add-establishment.component';
import { EstablishmentDetailsComponent } from './Establishment-components/establishment-details/establishment-details.component';
import { EstablishmentListComponent } from './Establishment-components/establishment-list/establishment-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'establishments/add', component: AddEstablishmentComponent },
  { path: 'establishments/:id', component: EstablishmentDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
