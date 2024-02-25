import { Component, EventEmitter, Input, NgModule, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Internship } from '../student/Internship';
import { StudentService } from '../student/student.service';
import { CartService } from './cart.service';
import { DataSharingService } from '../data-sharing.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit{

  @Input() cart: any[] = [];
  @Input() cartItems: any[] = [];
  @Output() removeFromCartEvent = new EventEmitter<any>();
  @Output() applyForInternshipEvent = new EventEmitter<any>();
  @Output() closeModalEvent = new EventEmitter<void>();
  @Input() sideBarOpen: boolean = true;
  email:string='';
  appliedInternship:Internship[]=[];
constructor(private dataShareService: DataSharingService, private cartService:CartService, private studentService: StudentService) {

}
  ngOnInit() {
 this.dataShareService.sharedData$.subscribe((email) =>{this.email = email})
 console.log('Email in cart is ', this.email);
 this.cartService.getAllInternships(this.email).subscribe((data) => {
  data.forEach(e => this.appliedInternship.push(e))

 });
  }

  closeModal() {
    this.closeModalEvent.emit();
  }
  showCartDetails(internship: Internship|null,internships: Internship[],action: String) {
    console.log('email in cart is ', this.email);
    if(action==='Apply') {
      this.studentService.applyForInternship(internships,this.email)
    }
    if(action == 'Remove') {
      console.log('Remove from cart action is triggered');
      this.studentService.removeFromCart(internship, this.email).subscribe((data) => {
        console.log('Deleted', data);
      });
      this.appliedInternship = this.appliedInternship.filter(i => i!=internship);
    }
    }
    sideBarToggler() {
      this.sideBarOpen = !this.sideBarOpen;
    }
}
@NgModule({
  imports: [
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatPaginatorModule,
    FormsModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
})
export class CartModule{}
