import { Injectable } from '@angular/core';
import { Internship } from '../student/Internship';
import { StudentComponent } from '../student/student.component';
import { StudentService } from '../student/student.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiurl = 'http://localhost:8081';

  constructor(private studentService: StudentService, private http: HttpClient) { }
  showCartDetails(internship: Internship[], action: String, email: string|'') {

    if (action === 'Apply') {
      this.studentService.applyForInternship(internship, email)
    }
    if(action == 'Add') {
      console.log('email in cart is ', email);
      this.addToCart(internship[0],[], email).subscribe(response => {
        console.log("Added to cart successfully", response);
      }, err => console.error('Error occured while adding to cart', err)
      );
    }
  }
  getAllInternships(email: string): Observable<Internship[]> {
    let urlParams = new HttpParams().append('userId', email);

    return this.http.get<Internship[]>(`${this.apiurl}/getAllItems`, {params: urlParams});
  }
 addToCart(internship: Internship, internships: Internship[], email: string): Observable<any> {
  let urlParams = new HttpParams().append('userId', email);;

  const headers = new HttpHeaders({'Content-Type': 'application/json'});
  return this.http.post<any>(`${this.apiurl}/addToCart`, internship, {headers: headers, params: urlParams});
}
}
