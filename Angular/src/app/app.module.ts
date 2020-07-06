import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { CreateMemberComponent } from './create-member/create-member.component';
import { MemberDetailsComponent } from './member-details/member-details.component';
import { MemberListComponent } from './member-list/member-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateMemberComponent } from './update-member/update-member.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginMemberComponent } from './login-member/login-member.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CreateTrainerComponent } from './create-trainer/create-trainer.component';
import { TrainerDetailsComponent } from './trainer-details/trainer-details.component';
import { TrainerListComponent } from './trainer-list/trainer-list.component';
import { LoginTrainerComponent } from './login-trainer/login-trainer.component';
import { UpdateTrainerComponent } from './update-trainer/update-trainer.component';
import { LogoutComponent } from './logout/logout.component';
import { TrainerComponent } from './trainer/trainer.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { ViewProductComponent } from './view-product/view-product.component';
import { MemberComponent } from './member/member.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { CreateCartComponent } from './create-cart/create-cart.component';
import { SchedulerModule } from './scheduler/scheduler.module';
import { DayPilotModule } from 'daypilot-pro-angular';
import { AdminComponent } from './admin/admin.component';
import { TschedulerModule } from './tscheduler/tscheduler.module';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';
import { CreateHealthComponent } from './health/create-health/create-health.component';
import { UpdateHealthComponent } from './health/update-health/update-health.component';
import { ViewHealthComponent } from './health/view-health/view-health.component';
import { LoginComponent } from './login/login.component';
import { ResultsComponent } from './health/results/results.component';
import { ServicesComponent } from './services/services.component';
import { BmiComponent } from './bmi/bmi.component';
import { TeamComponent } from './team/team.component';
import { HomemainComponent } from './homemain/homemain.component';
import { OrderComponent } from './order/order.component';
import { UpdateMemberAComponent } from './update-member-a/update-member-a.component';
import { UpdateTrianerAComponent } from './update-trianer-a/update-trianer-a.component';

//import { SchedulerComponent } from './scheduler/scheduler.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateMemberComponent,
    MemberDetailsComponent,
    MemberListComponent,
    CreateProductComponent,
    ProductDetailsComponent,
    ProductListComponent,
    UpdateProductComponent,
    UpdateMemberComponent,
    LoginMemberComponent,
    AdminLoginComponent,
    CreateTrainerComponent,
    TrainerDetailsComponent,
    TrainerListComponent,
    LoginTrainerComponent,
    UpdateTrainerComponent,
    LogoutComponent,
    TrainerComponent,
    AdminComponent,
    HomeComponent,
    ViewProductComponent,
    MemberComponent,
    ViewCartComponent,
    CreateCartComponent,
    ContactusComponent,
    FooterComponent,
    CreateHealthComponent,
    UpdateHealthComponent,
    ViewHealthComponent,LoginComponent,
    ResultsComponent,ServicesComponent,
    BmiComponent,TeamComponent,
    HomemainComponent,
    OrderComponent,
    UpdateMemberAComponent,
    UpdateTrianerAComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    SchedulerModule,DayPilotModule,
    TschedulerModule,ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }