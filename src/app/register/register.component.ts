import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {};
  //@Input () userFromHomeComponent: any;
  @Output() cancelRegister = new EventEmitter();
  constructor(private Accountserv: AccountService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

  // tslint:disable-next-line: typedef
  register()
  {
    this.Accountserv.register(this.model).subscribe(response => {
      console.log(response);
      this.cancel();
    }, error => {
      console.log(error);
    });
    console.log(this.model);
  }

  // tslint:disable-next-line: typedef
  cancel()
  {
    this.cancelRegister.emit(false);
  }

}
