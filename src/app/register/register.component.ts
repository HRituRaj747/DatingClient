import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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
  constructor(private Accountserv: AccountService, private toastser: ToastrService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

  // tslint:disable-next-line: typedef
  register()
  {
    this.Accountserv.register(this.model).subscribe(response => {
      console.log(response);
      this.cancel();
      this.toastser.success('You are registered');
    }, error => {
      console.log(error);
      this.toastser.error(error);
    });
    console.log(this.model);
  }

  // tslint:disable-next-line: typedef
  cancel()
  {
    this.cancelRegister.emit(false);
  }

}
