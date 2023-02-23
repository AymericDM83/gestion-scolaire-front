import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfessorListComponent} from "./professor-components/professor-list/professor-list.component";
import {AddProfessorComponent} from "./professor-components/add-professor/add-professor.component";
import {ProfessorDetailsComponent} from "./professor-components/professor-details/professor-details.component";
import {SubjectListComponent} from "./subject-components/subject-list/subject-list.component";
import {AddSubjectComponent} from "./subject-components/add-subject/add-subject.component";

const routes: Routes = [

  {path:'professors', component: ProfessorListComponent},
  {path:'professors/add', component: AddProfessorComponent},
  {path:'professors/:id', component: ProfessorDetailsComponent},
  {path:'subjects', component: SubjectListComponent},
  {path:'subjects/add', component: AddSubjectComponent},
  {path:'subjects/:id', component: ProfessorDetailsComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
