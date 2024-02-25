import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddInternshipModel } from '../AddInternshipModel';
import { MentorService } from '../mentor.service';
import { DataSharingService } from 'src/app/data-sharing.service';

@Component({
  selector: 'app-add-internship',
  templateUrl: './add-internship.component.html',
  styleUrls: ['./add-internship.component.css']
})
export class AddInternshipComponent implements OnInit {
  internshipModel: AddInternshipModel | null = null;
message: any;
success: any;
  mentorEmail!: string;

  onSubmit() {
    console.log('On submit', this.internshipForm.value)
    this.internshipModel = this.createModel();
    if(this.internshipModel){
    this.internshipModel.mentorEmail = this.mentorEmail;
    }
    this.mentorService.addInternship(this.internshipModel).subscribe(data => {
      if(data) {
        if(data.statusCode == 200) {
          this.success = true;
          this.internshipForm.reset();
        }
        this.message = data.message;
      
      }
    });
  }

  sideBarOpen: boolean = true;
  internshipForm!: FormGroup;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  constructor(private fb: FormBuilder, private mentorService:MentorService, private dataSharingService: DataSharingService) {}

  ngOnInit(): void {
    this.initForm();

    this.dataSharingService.sharedData$.subscribe((email)=> this.mentorEmail = email);
    
    console.log("Mentor email is ", this.mentorEmail)
  }

  initForm() {
    this.internshipForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required],
      duration: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      seats: [0, [Validators.required, Validators.min(0)]],
      requirements: [''],
      mentorEmail: [this.mentorEmail]
    });
  }

  createModel(): AddInternshipModel | null {
    if (this.internshipForm.valid) {
      const formValue = this.internshipForm.value;
      return new AddInternshipModel(
        formValue.title,
        formValue.description,
        formValue.location,
        formValue.duration,
        formValue.price,
        formValue.seats,
        formValue.requirements,
        formValue.mentorEmail
      );
    }
    return null;
  }
}
