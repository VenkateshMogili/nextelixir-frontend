import { Component, OnInit } from '@angular/core';
import {UserserviceService} from '../userservice.service';

@Component({
  selector: 'app-editreview',
  templateUrl: './editreview.component.html',
  styleUrls: ['./editreview.component.css']
})
export class EditreviewComponent implements OnInit {

  model: any = {};
  constructor(private service: UserserviceService) { }

  ngOnInit() {
  }
  submitReview() {
    console.log(this.model);
    this.service.submitreview(this.model).subscribe(data => {
      if(data['success']) {
        alert('Submitted Successfully...');
      } else {
        alert('Error');
      }
    }, (error) => {
      console.log(error);
      alert("No Internet Connection");
    });
  }

}
