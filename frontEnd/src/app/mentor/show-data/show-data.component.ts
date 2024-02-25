import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataSharingService } from 'src/app/data-sharing.service';
import { MentorStudentModel } from '../MentorStudentModel';
import { StudentService } from 'src/app/student/student.service';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {
  dataSharingService: any;

  constructor(private route: ActivatedRoute, private dataStorage: DataSharingService, private studentService:StudentService) {

  }
  ngOnInit(): void {
  
    this.dataStorage.currentInternship.subscribe(internship => {
      this.studentList = internship;
    });
    console.log('student email is ', this.studentList)
  }
  studentList!: MentorStudentModel;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  sideBarOpen: boolean = true;
  updateStatus(email: string, internshipId:string, status:string) {
    let model = {studentEmail:email, internshipId:internshipId, status:status};
    this.studentService.updateInternshipStatus(model).subscribe(data => {
      console.log('Output after updating status is', data);
      if(this.studentList)
      this.studentList.studentEmails= this.studentList.studentEmails.filter(e=> e!== model.studentEmail);
    })
    }
}
