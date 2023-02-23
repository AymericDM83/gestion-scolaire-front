import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClassgroupComponent} from "./classgroup-components/classgroup/classgroup.component";
import {ClassgroupListComponent} from "./classgroup-components/classgroup-list/classgroup-list.component";
import {AddClassgroupComponent} from "./classgroup-components/add-classgroup/add-classgroup.component";
import {ClassgroupDetailsComponent} from "./classgroup-components/classgroup-details/classgroup-details.component";
import {ClassroomComponent} from "./classroom-components/classroom/classroom.component";
import {AddClassroomComponent} from "./classroom-components/add-classroom/add-classroom.component";
import {ClassroomDetailsComponent} from "./classroom-components/classroom-details/classroom-details.component";

const routes: Routes = [
  {path: 'classgroup', component: ClassgroupListComponent},
  {path: 'classgroup/add', component: AddClassgroupComponent},
  {path: 'classgroup/:id', component: ClassgroupDetailsComponent},
  {path: 'classroom', component: ClassroomComponent},
  {path: 'classgroup/add', component: AddClassroomComponent},
  {path: 'classgroup/:id', component: ClassroomDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
