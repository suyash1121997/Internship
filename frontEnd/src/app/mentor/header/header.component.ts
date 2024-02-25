import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/data-sharing.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  userName = ""
    constructor(private dataShareService: DataSharingService, private router: Router) {}
  
    ngOnInit(): void {
      this.dataShareService.sharedData$.subscribe(email => {
        this.userName=email
      })
      console.log('user name in header is ', this.userName.toString())
    }
  
    toggleSidebar() {
      this.toggleSidebarForMe.emit();
    }
}
