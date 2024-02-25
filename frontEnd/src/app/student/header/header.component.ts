import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/data-sharing.service';

@Component({
  selector: 'app-studentHeader',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class StudentHeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
userName = ""
  constructor(private dataShareService: DataSharingService, private router: Router) {}

  ngOnInit(): void {
      this.dataShareService.sharedData$.subscribe((data)=> {
        this.userName = data
    })
    console.log('user name in header is ', this.userName)
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
}
