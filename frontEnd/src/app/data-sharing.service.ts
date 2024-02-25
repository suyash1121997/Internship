import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MentorStudentModel } from './mentor/MentorStudentModel';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
private email: string='';
  constructor() { }
  private sharedDataSubject = new BehaviorSubject<string>('');
  sharedData$ = this.sharedDataSubject.asObservable();
setEmail(email:string):void{
this.email= email;
localStorage.setItem('userEmail', email);
}
getEmail():string | null{
  return localStorage.getItem('userEmail')
}
  setSharedData(data: any) {
    this.sharedDataSubject.next(data);
  }
  private internshipSource = new BehaviorSubject<MentorStudentModel>(MentorStudentModel.prototype);
  currentInternship = this.internshipSource.asObservable();


  changeInternship(internship: MentorStudentModel) {
    this.internshipSource.next(internship);
  }
}
