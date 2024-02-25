// mentor.component.ts

import { Component, NgModule, OnInit } from '@angular/core';
import { MentorService } from './mentor.service'; // Import your mentor service
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MentorStudentModel } from './MentorStudentModel';
import { DataSharingService } from '../data-sharing.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.css']
})
export class MentorComponent implements OnInit {
  mentorEmail:string='';
  publishedInternships: MentorStudentModel[] = [] // Modify the type according to your data model
  sideBarOpen = true;
  myArrayObject: any;
  constructor(private mentorService: MentorService, private dataSharingService:DataSharingService) {
  }

  ngOnInit() {
    this.dataSharingService.sharedData$.subscribe(email => {
      this.mentorEmail=email
    })

    // Fetch published internships when the component is initialized
    this.mentorService.getPublishedInternships(this.mentorEmail).pipe(
      map((data) => data.internshipDetails.map((internshipDetail: { internshipId: any;internshipTitle:any; studentEmails:any; }) => ({
        // Map your properties here based on the structure of MentorStudentModel
        // For example:
        internshipId: internshipDetail.internshipId,
        internshipTitle: internshipDetail.internshipTitle,
        studentEmails:internshipDetail.studentEmails
    
        // ...
      })))
    ).subscribe(
      (mappedData) => {
        console.log('Mapped Output is ', mappedData);
        this.publishedInternships = mappedData;
        console.log('Published internships are ', this.publishedInternships);
      },
      (error) => {
        console.error('Error occurred:', error);
      }
     
    );
    }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  viewApplications(internshipId: string) {
    // Implement logic to navigate to the applications view for the selected internship
    // You can use Angular Router for navigation
  }
  sendInternship(internship: MentorStudentModel) {
    this.dataSharingService.changeInternship(internship);
  }
}

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class MentorModule { }