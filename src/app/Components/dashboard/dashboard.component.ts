import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  opened = false;
  openDash:boolean = false;
 

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openDashboard(){
    this.openDash =  !this.openDash;
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }

}