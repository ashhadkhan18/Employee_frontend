import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigate2emplist(){
    this.router.navigate(['/employee-list']);
  }

  navigateToUpdateEmployee(){
    this.router.navigate(['/employee-update']);
  }

  navigateToDeleteEmployee(){
    this.router.navigate(['/employee-delete']);
  }

  navigateToAddEmployee(){
    this.router.navigate(['/employee-add']);
  }
}
