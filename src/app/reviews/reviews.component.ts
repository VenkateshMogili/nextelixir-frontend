import { Component, OnInit } from '@angular/core';
import {UserserviceService} from '../userservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews: any;
  reviewslen: any;
  constructor(private service: UserserviceService) {
  }

  ngOnInit() {
    this.allReviews();
  }

  allReviews() {
    this.service.allreviews().subscribe(data => {
      if(data['success']) {
        this.reviews = data['data'];
        this.reviewslen = this.reviews.length;
      } else {
        alert('No data found');
      }
    }, (error) => {
      console.log(error);
      alert('No Internet Connection');
    });
  }
}
