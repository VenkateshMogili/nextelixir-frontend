import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: any;
  constructor(private router: Router) {
    this.user = localStorage.getItem('User');
    if(this.user==null){
      //do nothing
    } else{
      this.router.navigate(['/dashboard']);
    }
  }

  ngOnInit() {
  }

}
