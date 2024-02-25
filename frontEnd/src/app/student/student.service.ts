import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Internship } from './Internship';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  removeFromCart(internship: Internship | null, email: string) {
    let urlParams;
    if(internship !=null){
    urlParams = new HttpParams().append('userId', email).append('internshipId', internship.id);
    }
   return this.http.delete('http://localhost:8081/deleteFromCart',  {params: urlParams})
  }
  updateInternshipStatus(model:any) {
    return this.http.put('http://localhost:8081/internship/updateStatus', model);
  }
  private StringSource = new BehaviorSubject<string>('Initial Va(lue');
  currentString$ = this.StringSource.asObservable();
  updateNewString(newString:string) {
    this.StringSource.next(newString);
  }
  getInternships(email:string) {
    let requestParams = new HttpParams().append('studentEmail', email);
    return this.http.get<any>(`http://localhost:8081/internship/getAllInternships`, {params:requestParams});
  }
  applyForInternship(internship: Internship[], email: String) {   
    const price = internship.reduce((sum, internship) => sum + internship.price, 0);
    let id: String[]=[];
    internship.forEach(e => id.push(e.id));
    this.router.navigate(['/payment'], {
      queryParams: {
        email: email, 
        internshipId: id,
        price: price
      }
    });

    console.log('Applied for `${id}`}');
  }
  constructor(private http: HttpClient, private router: Router) { }
}
