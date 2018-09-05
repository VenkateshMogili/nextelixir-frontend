import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {HttpClient} from "@angular/common/http";
@Injectable()
export class UserserviceService {

  constructor(private http: Http, private hc: HttpClient) { }
  login(data) {
    console.log(data);
    var email = data['email']; 
    var password = data['password'];
    return this.hc.get('http://localhost:4000/api/login/' + email + '/' + password);
  }
  allreviews() {
    return this.hc.get('http://localhost:4000/api/allreviews/');
  }
  deleteemployee(id) {
    return this.hc.delete('http://localhost:4000/api/admin/delete/' + id);
  }
  allemployees() {
    return this.hc.get('http://localhost:4000/api/allemployees/');
  }
  addemployees(data) {
    return this.hc.post('http://localhost:4000/api/admin/addemployees/', data);
  }
  // submitting review page
  submitreview(data) {
    return this.hc.post('http://localhost:4000/api/editreview', data);
  }
  update(data){
  	console.log(data);
    return this.hc.put('http://localhost:4000/api/update/', data);
  }
  editemployees(data){
    console.log(data);
    return this.hc.put('http://localhost:4000/api/admin/updateemployee/', data);
  }

}
