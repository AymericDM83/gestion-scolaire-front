import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassgroupComponent } from './classgroup-components/classgroup/classgroup.component';
import { AddClassgroupComponent } from './classgroup-components/add-classgroup/add-classgroup.component';
import { ClassgroupDetailsComponent } from './classgroup-components/classgroup-details/classgroup-details.component';
import { ClassroomComponent } from './classroom-components/classroom/classroom.component';
import { ProfessorListComponent } from './professor-components/professor-list/professor-list.component';
import { AddProfessorComponent } from './professor-components/add-professor/add-professor.component';
import { ProfessorDetailsComponent } from './professor-components/professor-details/professor-details.component';
import { SubjectListComponent } from './subject-components/subject-list/subject-list.component';
import { AddSubjectComponent } from './subject-components/add-subject/add-subject.component';
import { SubjectDetailsComponent } from './subject-components/subject-details/subject-details.component';
import { ClassroomListComponent } from './classroom-components/classroom-list/classroom-list.component';
import { AddEstablishmentComponent } from './Establishment-components/add-establishment/add-establishment.component';
import { EstablishmentDetailsComponent } from './Establishment-components/establishment-details/establishment-details.component';
import { EstablishmentListComponent } from './Establishment-components/establishment-list/establishment-list.component';
import { HomeComponent } from './home/home.component';
import { ClassgroupListComponent } from './classgroup-components/classgroup-list/classgroup-list.component';
import { AddClassroomComponent } from './classroom-components/add-classroom/add-classroom.component';
import { ClassroomDetailsComponent } from './classroom-components/classroom-details/classroom-details.component';
import { CalanderComponent } from './Calendar-components/calendar/calendar.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'establishments/add', component: AddEstablishmentComponent },
  { path: 'establishments/:eId', component: EstablishmentDetailsComponent },
  { path: 'establishments/:eId/professors', component: ProfessorListComponent },
  {
    path: 'establishments/:eId/professors/add',
    component: AddProfessorComponent,
  },
  {
    path: 'establishments/:eId/professors/:pId',
    component: ProfessorDetailsComponent,
  },
  {
    path: 'establishments/:eId/subjects',
    component: SubjectListComponent,
  },
  { path: 'establishments/:eId/subjects/add', component: AddSubjectComponent },
  {
    path: 'establishments/:eId/subjects/:sId',
    component: SubjectDetailsComponent,
  },
  {
    path: 'establishments/:eId/classgroups',
    component: ClassgroupListComponent,
  },
  {
    path: 'establishments/:eId/classgroups/add',
    component: AddClassgroupComponent,
  },
  {
    path: 'establishments/:eId/classgroups/:cgId',
    component: ClassgroupDetailsComponent,
  },
  { path: 'establishments/:eId/classrooms', component: ClassroomListComponent },
  {
    path: 'establishments/:eId/classrooms/add',
    component: AddClassroomComponent,
  },
  {
    path: 'establishments/:eId/classrooms/:crId',
    component: ClassroomDetailsComponent,
  },
  {
    path: 'establishments/:eId/calendar',
    component: CalanderComponent,
  },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
