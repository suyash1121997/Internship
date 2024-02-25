import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { StudentComponent } from './student/student.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { MentorComponent } from './mentor/mentor.component';
import { ShowDataComponent } from './mentor/show-data/show-data.component';
import { AddInternshipComponent } from './mentor/add-internship/add-internship.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'student', component: StudentComponent},
  {path: 'mentor', component: MentorComponent},
  {path: 'cart', component: CartComponent},
  {path:'showdata', component: ShowDataComponent},
  {path:'payment', component:PaymentComponent},
  {path:'addInternship', component:AddInternshipComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
