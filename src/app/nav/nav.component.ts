import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  mode: any = {};
  // Way to check if person is logged in or not
  // loggedIn = false;
  // val = false;
 // currentUser$: Observable<User> ;
// To directly using service in html we made it public
  constructor(public accountService: AccountService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
   // this.getCurrentUser();
   // Checking if user is there or not
   // this.currentUser$ = this.accountService.currentUser$;
  }

  // tslint:disable-next-line: typedef
  login()
  {
    this.accountService.login(this.mode).subscribe(Option => {
     // this.mode = Option;
     console.log(Option);
     //this.loggedIn = true;
    }, error => {
      console.log(error);
    });
    console.log(this.mode);
  }

  // tslint:disable-next-line: typedef
  logout()
  {
    this.accountService.logout();
    //this.loggedIn = false;
  }

  // tslint:disable-next-line: typedef
  // getCurrentUser(){
  //   this.accountService.currentUser$.subscribe(user => {
  //     this.loggedIn = !!user;
  //   }, error => {
  //     console.log(error);
  //   });
  // }

}
