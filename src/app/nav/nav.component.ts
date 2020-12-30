import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() username: null | undefined;
  mode: any = {};
  // user: User | undefined;
  // Way to check if person is logged in or not
  // username: any;
  // val = false;
  // currentUser$: Observable<User> | undefined ;
// To directly using service in html we made it public
  constructor(public accountService: AccountService, private router: Router, private toastser: ToastrService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
   // this.getCurrentUsername();
   // Checking if user is there or not
    // this.u = this.accountService.currentUser$;
  }

  // tslint:disable-next-line: typedef
  login()
  {
    this.accountService.login(this.mode).subscribe(Option => {
     // this.mode = Option;
    console.log('options returned from login' + Option);
     // this.loggedIn = true;
    this.router.navigateByUrl('/members');
    this.toastser.success('Logged In Successfully ');
    });
   // console.log(this.mode);
  }

  // tslint:disable-next-line: typedef
  logout()
  {
    this.accountService.logout();
    this.router.navigateByUrl('/');
    // this.loggedIn = false;
  }

  // tslint:disable-next-line: typedef
  // getCurrentUsername(){

  // // tslint:disable-next-line: no-non-null-assertion
  // const user: User =  JSON.parse(localStorage.getItem('user')! );
  // this.username = user.username;
  // // this.accountService.currentUser$.subscribe(user => {
  // //      this.username = user.username;
  // //   }, error => {
  // //     console.log(error);
  // //   });
  // //  }
  // }

}
