import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfessorListComponent} from "./professor-components/professor-list/professor-list.component";
import {AddProfessorComponent} from "./professor-components/add-professor/add-professor.component";
import {ProfessorDetailsComponent} from "./professor-components/professor-details/professor-details.component";
import {SubjectListComponent} from "./subject-components/subject-list/subject-list.component";
import {AddSubjectComponent} from "./subject-components/add-subject/add-subject.component";
import {SubjectDetailsComponent} from "./subject-components/subject-details/subject-details.component";
import {ClassgroupListComponent} from "./classgroup-components/classgroup-list/classgroup-list.component";
import {AddClassroomComponent} from "./classroom-components/add-classroom/add-classroom.component";
import {ClassroomDetailsComponent} from "./classroom-components/classroom-details/classroom-details.component";
import {ClassroomListComponent} from "./classroom-components/classroom-list/classroom-list.component";

const routes: Routes = [

  {path:'professors', component: ProfessorListComponent},
  {path:'professors/add', component: AddProfessorComponent},
  {path:'professors/:id', component: ProfessorDetailsComponent},
  {path:'subjects', component: SubjectListComponent},
  {path:'subjects/add', component: AddSubjectComponent},
  {path:'subjects/:id', component: SubjectDetailsComponent},
  {path: 'classrooms', component: ClassroomListComponent},
  {path: 'classrooms/add', component: AddClassroomComponent},
  {path: 'classrooms/:id', component: ClassroomDetailsComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
