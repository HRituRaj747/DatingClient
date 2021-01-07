
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

username: any;
  title = 'Dating App';
  constructor( private accountserv: AccountService){}


  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.setCurrentUser();
    //this.getUsers();
  }



// tslint:disable-next-line: typedef
setCurrentUser()
{
 // tslint:disable-next-line: no-non-null-assertion
 const user: User = JSON.parse(localStorage.getItem('user')! );
 // this.username = user.username;
 this.accountserv.setCurrentUser(user);
}


// tslint:disable-next-line: typedef


}
