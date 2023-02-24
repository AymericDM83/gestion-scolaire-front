import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClassgroupComponent} from "./classgroup-components/classgroup/classgroup.component";
import {ClassgroupListComponent} from "./classgroup-components/classgroup-list/classgroup-list.component";
import {AddClassgroupComponent} from "./classgroup-components/add-classgroup/add-classgroup.component";
import {ClassgroupDetailsComponent} from "./classgroup-components/classgroup-details/classgroup-details.component";
import {ClassroomComponent} from "./classroom-components/classroom/classroom.component";
import {AddClassroomComponent} from "./classroom-components/add-classroom/add-classroom.component";
import {ClassroomDetailsComponent} from "./classroom-components/classroom-details/classroom-details.component";
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
  {path: 'classgroups', component: ClassgroupListComponent},
  {path: 'classgroups/add', component: AddClassgroupComponent},
  {path: 'classgroups/:id', component: ClassgroupDetailsComponent},
  {path: 'classrooms', component: ClassroomComponent},
  {path: 'classrooms/add', component: AddClassroomComponent},
  {path: 'classrooms/:id', component: ClassroomDetailsComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
