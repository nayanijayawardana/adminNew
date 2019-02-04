import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { DashboardComponent } from './admin-layout/dashboard/dashboard.component';
import { StudentComponent } from './admin-layout/student/student.component';
import { TutorComponent } from './admin-layout/tutor/tutor.component';
import { MsgNComComponent } from './admin-layout/msg-n-com/msg-n-com.component';
import { NewsfeedComponent } from './admin-layout/newsfeed/newsfeed.component';
import { BoostofferComponent } from './admin-layout/boostoffer/boostoffer.component';


const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "admin",
    component: AdminLayoutComponent,
    children: [
        {path:"dashboard", component: DashboardComponent},
        {path:"student", component: StudentComponent},
        {path:"tutor", component:TutorComponent},           
        {path:"msgncom", component: MsgNComComponent},        
        {path:"newsfeed", component: NewsfeedComponent},  
        {path:"boostoffer", component: BoostofferComponent}, 
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
