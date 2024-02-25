import { Component, NgModule, OnInit } from '@angular/core';
import { StudentService } from './student.service';
import { CartComponent } from '../cart/cart.component';
import { Internship } from './Internship';
import 'bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import 'bootstrap';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CartService } from '../cart/cart.service';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent implements OnInit {
  internships: Internship[] = [];
  searchQuery: string = '';
  filteredInternships: Internship[] = [];
  pagedInternships: Internship[] = [];
  cart: any[] = [];
  currentPage = 1;
  itemsPerPage = 2; // Adjust the number of items per page
  pages: number[] = [];
  currentUser: any = {};
  sideBarOpen = true;
  email: any;
  // isItemInCart : boolean = false

  constructor(private dataSharingSerice:DataSharingService, private cartService: CartService, private studentService: StudentService, private router: Router, private activated: ActivatedRoute) {
    this.activated.queryParams.subscribe(params => {
      this.email = params['email'];
    });
  }

  ngOnInit() {
   
    this.email = this.dataSharingSerice.getEmail();
    this.dataSharingSerice.sharedData$.subscribe((data)=> {
      this.email = data
  })
  this.cartService.getAllInternships(this.email).subscribe((data)=> {
    this.cart = data;
        });
    console.log('Email is ', this.email)
    this.studentService.getInternships(this.email).subscribe(
      (data) => {
        console.log("Data is ", data.details);
        this.internships = [...data.details];
        this.filteredInternships = this.internships;
        this.calculatePageNumbers();
        this.setPage(this.currentPage);
        console.log("Internship is ", this.internships);
      },
      (error) => {
        console.error('Error occurred:', error);
      }
    );
  }

  applyForInternship(internship: any) {
    this.studentService.updateNewString(this.email);
    this.studentService.applyForInternship(internship, this.email)
  }
  isCartOpen = false;

  openCartModal() {
    this.isCartOpen = true;
  }

  closeCart() {
    this.isCartOpen = false;
  }
  isItemInCart(internship: any): boolean {
    return this.cart.some(item => item.id === internship.id);
  }

  proceedToPayment() {
    // Implement logic for proceeding to payment
  }
  filterInternships() {
    this.filteredInternships = this.internships.filter(internship =>
      internship.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      internship.description.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      internship.requirements.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    this.pagedInternships = this.filteredInternships;
    this.calculatePageNumbers();
    this.setPage(1); // Reset to the first page after filtering
  }

  addToCart(internship: Internship[]) {
    const isInCart = this.cart.some(item => item.id === internship[0].id);

    if (!isInCart) {
      this.cart.push(internship);
      this.cartService.showCartDetails(internship, 'Add', this.email);
    }
  } 
  viewCart() {
    console.log(this.cart);
  }

  showCartModal = false;



  closeCartModal() {
    this.showCartModal = false;
  }


  calculatePageNumbers() {
    const totalPages = Math.ceil(this.filteredInternships.length / this.itemsPerPage);
    this.pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  setPage(page: number) {
    if (page < 1 || page > this.pages.length) return;
    this.currentPage = page;
    const startIndex = (page - 1) * this.itemsPerPage;
    this.pagedInternships = this.filteredInternships.slice(startIndex, startIndex + this.itemsPerPage);
  }

  previousPage() {
    this.setPage(this.currentPage - 1);
  }

  nextPage() {
    this.setPage(this.currentPage + 1);
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
export class StudentModule { }
