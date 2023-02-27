import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstablishmentListComponent } from './Establishment-components/establishment-list/establishment-list.component';
import { AddEstablishmentComponent } from './Establishment-components/add-establishment/add-establishment.component';
import { EstablishmentComponent } from './Establishment-components/establishment/establishment.component';
import { EstablishmentHomeComponent } from './Establishment-components/establishment-home/establishment-home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EstablishmentDetailsComponent } from './Establishment-components/establishment-details/establishment-details.component';
import { SubjectListComponent } from './subject-components/subject-list/subject-list.component';
import { SubjectComponent } from './subject-components/subject/subject.component';
import { SubjectDetailsComponent } from './subject-components/subject-details/subject-details.component';
import { ClassroomListComponent } from './classroom-components/classroom-list/classroom-list.component';
import { ClassroomComponent } from './classroom-components/classroom/classroom.component';
import { ClassroomDetailsComponent } from './classroom-components/classroom-details/classroom-details.component';
import { AddSubjectComponent } from './subject-components/add-subject/add-subject.component';
import { AddClassroomComponent } from './classroom-components/add-classroom/add-classroom.component';
import { ClassgroupListComponent } from './classgroup-components/classgroup-list/classgroup-list.component';
import { ClassgroupComponent } from './classgroup-components/classgroup/classgroup.component';
import { ClassgroupDetailsComponent } from './classgroup-components/classgroup-details/classgroup-details.component';
import { AddClassgroupComponent } from './classgroup-components/add-classgroup/add-classgroup.component';
import { ProfessorListComponent } from './professor-components/professor-list/professor-list.component';
import { ProfessorComponent } from './professor-components/professor/professor.component';
import { ProfessorDetailsComponent } from './professor-components/professor-details/professor-details.component';
import { AddProfessorComponent } from './professor-components/add-professor/add-professor.component';
import { AddEventInCalanderComponent } from './add-event-in-calander/add-event-in-calander.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalanderComponent } from './calander/calander.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    EstablishmentListComponent,
    AddEstablishmentComponent,
    EstablishmentComponent,
    EstablishmentHomeComponent,
    NavbarComponent,
    EstablishmentDetailsComponent,
    SubjectListComponent,
    SubjectComponent,
    SubjectDetailsComponent,
    ClassroomListComponent,
    ClassroomComponent,
    ClassroomDetailsComponent,
    AddSubjectComponent,
    AddClassroomComponent,
    ClassgroupListComponent,
    ClassgroupComponent,
    ClassgroupDetailsComponent,
    AddClassgroupComponent,
    ProfessorListComponent,
    ProfessorComponent,
    ProfessorDetailsComponent,
    AddProfessorComponent,
    HomeComponent,
    CalanderComponent,
    AddEventInCalanderComponent,
  ],

  imports: [
    BrowserModule,

    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    FullCalendarModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
