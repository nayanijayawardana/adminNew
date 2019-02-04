import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';



import { Routes, RouterModule} from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {  HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './admin-layout/dashboard/dashboard.component';
import { SidebarComponent } from './admin-layout/sidebar/sidebar.component';
import { StudentComponent } from './admin-layout/student/student.component';
import { TutorComponent } from './admin-layout/tutor/tutor.component';
import { MsgNComComponent } from './admin-layout/msg-n-com/msg-n-com.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NewsfeedComponent } from './admin-layout/newsfeed/newsfeed.component';
import { BoostofferComponent } from './admin-layout/boostoffer/boostoffer.component';
import { AdminServiceService } from './services/admin-service.service';
import { PiechartTutorComponent } from './admin-layout/chart/piechart-tutor/piechart-tutor.component'
import { PiechartComponent } from './admin-layout/chart/piechart/piechart.component';
import { TotalComponent } from './admin-layout/chart/total/total.component';
import { DiswiseComponent } from './admin-layout/chart/diswise/diswise.component';
import { SubwiseComponent } from './admin-layout/chart/subwise/subwise.component';
import { BarchartComponent } from './admin-layout/chart/barchart/barchart.component';
import { ViewsComponent } from './admin-layout/views/views.component';
import { ViewtComponent } from './admin-layout/viewt/viewt.component';











;

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    NavbarComponent,
    DashboardComponent,
    SidebarComponent,
    StudentComponent,
    TutorComponent,
    MsgNComComponent,
    NewsfeedComponent,
    BoostofferComponent,
    PiechartComponent,
    PiechartTutorComponent,
    TotalComponent,
    DiswiseComponent,
    SubwiseComponent,
    BarchartComponent,
    ViewsComponent,
    ViewtComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,



  ],
  providers: [ AdminServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
