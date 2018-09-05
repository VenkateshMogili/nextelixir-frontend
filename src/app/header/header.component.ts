import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: any;
  loggedin: any;
  admin: any;
  isAdmin: any;
  constructor(private router: Router) {
    this.user = localStorage.getItem('User');
    if(this.user === null) {
      this.loggedin = false;
    } else{
      this.loggedin = true;
      this.admin = localStorage.getItem('admin');
      if(this.admin === null) {
        this.isAdmin = false;
      } else{
        this.isAdmin = true;
      }
    }
  }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem('User');
    if(localStorage.getItem('admin')){
      localStorage.removeItem('admin');
    }
    this.router.navigate(['/home']);
  }

}
