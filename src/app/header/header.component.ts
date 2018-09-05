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
  constructor(private router: Router) {
    this.user = localStorage.getItem('User');
    if(this.user==null){
      this.loggedin=false;
    } else{
      this.loggedin=true;
      this.router.navigate(['/dashboard']);
    }
  }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem('User');
    this.router.navigate(['/home']);
  }

}
