import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfessorListComponent} from "./professor-components/professor-list/professor-list.component";
import {AddProfessorComponent} from "./professor-components/add-professor/add-professor.component";
import {ProfessorDetailsComponent} from "./professor-components/professor-details/professor-details.component";

const routes: Routes = [

  {path:'professors', component: ProfessorListComponent},
  {path:'professors/add', component: AddProfessorComponent},
  {path:'professors/:id', component: ProfessorDetailsComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
