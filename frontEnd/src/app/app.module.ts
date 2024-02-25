import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthService } from './auth.service';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { StudentComponent, StudentModule } from './student/student.component';
import { MentorComponent } from './mentor/mentor.component';
import { CartComponent, CartModule } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';// Import your AuthService
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CommonModule, DatePipe } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidebarComponent } from './mentor/sidebar/sidebar.component';
import { DashboardComponent } from './mentor/dashboard/dashboard.component';
import { HeaderComponent } from './mentor/header/header.component';
import { MatMenuModule } from '@angular/material/menu';
import {StudentHeaderComponent} from './student/header/header.component'
import { StudentSidebarComponent } from './student/sidebar/sidebar.component';
import { ShowDataComponent } from './mentor/show-data/show-data.component';
import { AddInternshipComponent } from './mentor/add-internship/add-internship.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentSidebarComponent,
    StudentHeaderComponent,
    SignupComponent,
    ForgotPasswordComponent,
    StudentComponent,
    MentorComponent,
    CartComponent,
    PaymentComponent,
    SidebarComponent,
    DashboardComponent,
    HeaderComponent,
    ShowDataComponent,
    AddInternshipComponent
  ],
  imports: [
    BrowserModule,
    CartModule,
    StudentModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatPaginatorModule,
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    FormsModule, // Add FormsModule here
    HttpClientModule, BrowserAnimationsModule, // Add HttpClientModule here
  ],
  providers: [AuthService, LoginComponent, CartComponent, DatePipe, { provide: LOCALE_ID, useValue: 'en-gb' }], // Provide the AuthService
  bootstrap: [AppComponent]
})
export class AppModule { }
