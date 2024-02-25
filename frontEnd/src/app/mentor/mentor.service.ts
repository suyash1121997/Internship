import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MentorStudentModel } from './MentorStudentModel';
import { Observable } from 'rxjs';
import { AddInternshipModel } from './AddInternshipModel';

@Injectable({
  providedIn: 'root'
})
export class MentorService {
  addInternship(internshipModel: AddInternshipModel|null) {
    console.log('internship model is ', internshipModel)
   return this.http.post<any>("http://localhost:8081/internship/addInternship", internshipModel);
  }
  getPublishedInternships(mentorEmail: string) {
    console.log('Mentor email is ', mentorEmail)
    let param = new HttpParams().append('mentorEmail', mentorEmail)
  
      return this.http.get<any>("http://localhost:8081/getAllInternshipRequests",{params:param});
  
  }

  constructor(private http: HttpClient) { }
}
