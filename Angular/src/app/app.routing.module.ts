import { MemberDetailsComponent } from './member-details/member-details.component';
import { CreateMemberComponent } from './create-member/create-member.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberListComponent } from './member-list/member-list.component';
import { UpdateMemberComponent } from './update-member/update-member.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LoginMemberComponent } from './login-member/login-member.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { TrainerListComponent } from './trainer-list/trainer-list.component';
import { CreateTrainerComponent } from './create-trainer/create-trainer.component';
import { TrainerDetailsComponent } from './trainer-details/trainer-details.component';
import { UpdateTrainerComponent } from './update-trainer/update-trainer.component';
import { LoginTrainerComponent } from './login-trainer/login-trainer.component';
import { LogoutComponent } from './logout/logout.component';
import { TrainerComponent } from './trainer/trainer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { MemberComponent } from './member/member.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { CreateCartComponent } from './create-cart/create-cart.component';
import { AdminComponent } from './admin/admin.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { TschedulerComponent } from './tscheduler/tscheduler.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CreateHealthComponent } from './health/create-health/create-health.component';
import { UpdateHealthComponent } from './health/update-health/update-health.component';
import { ViewHealthComponent } from './health/view-health/view-health.component';
import { ResultsComponent } from './health/results/results.component';
import { ServicesComponent } from './services/services.component';
import { BmiComponent } from './bmi/bmi.component';
import { TeamComponent } from './team/team.component';
import { HomemainComponent } from './homemain/homemain.component';
import { OrderComponent } from './order/order.component';
import { UpdateMemberAComponent } from './update-member-a/update-member-a.component';
import { UpdateTrianerAComponent } from './update-trianer-a/update-trianer-a.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'members', component: MemberListComponent },
  { path: 'addm', component: CreateMemberComponent },
  { path: 'updatem/:id', component: UpdateMemberComponent },
  { path: 'detailsm/:id', component: MemberDetailsComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'addp', component: CreateProductComponent },
  { path: 'updatep/:id', component: UpdateProductComponent },
  { path: 'detailsp/:id', component: ProductDetailsComponent },
  { path: 'loginm', component: LoginMemberComponent },
  { path: 'logina', component: AdminLoginComponent },
  { path: 'trainer', component: TrainerListComponent },
  { path: 'addt', component: CreateTrainerComponent },
  { path: 'detailst/:id', component: TrainerDetailsComponent },
  { path: 'updatet/:id', component: UpdateTrainerComponent },
  { path: 'logint', component: LoginTrainerComponent },
  { path: 'members/loginm', component: LogoutComponent },
  { path: 'trainerpg/logint', component: LogoutComponent },
  { path: 'memberpg/loginm', component: LogoutComponent },
  { path: 'admnpg/logina', component: LogoutComponent },
  { path: 'trainerpg/trainer', component: LogoutComponent }, 
  { path: 'trainerpg', component: TrainerComponent },
  { path: 'adminpg', component: AdminComponent },
  { path: 'scheduler', component: SchedulerComponent },
  { path: 'tscheduler', component: TschedulerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'viewp', component: ViewProductComponent }, 
  { path: 'memberpg', component: MemberComponent },
  { path: 'viewc', component: ViewCartComponent },
  { path: 'addtc', component: CreateCartComponent },
  { path: 'cu', component: ContactusComponent },
  { path: 'addhr', component: CreateHealthComponent },
  { path: 'updatehr/:id', component: UpdateHealthComponent },
  { path: 'viewhr', component: ViewHealthComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'bmi', component: BmiComponent }  ,
  { path: 'team', component: TeamComponent } ,
  { path: 'home', component: HomemainComponent }  ,
  { path: 'header', component: HomeComponent }, 
  { path: 'order', component: OrderComponent }  ,
  { path: 'updateMA/:id', component: UpdateMemberAComponent }, 
  { path: 'updateTA/:id', component: UpdateTrianerAComponent }  ,
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }