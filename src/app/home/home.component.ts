import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registerMode = false;
  users: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    //this.getUsers();
  }

  // tslint:disable-next-line: typedef
  registerToggle()
  {
    this.registerMode = true;
  }

  // getUsers(){
  //   this.http.get('https://localhost:5001/api/users').subscribe(resp => {
  //     this.users = resp;
  //   }, err => {
  //     console.log(err);
  //   });
  // }
  cancelRegisterMode(event: boolean)
  {
    this.registerMode = event;
  }

}
