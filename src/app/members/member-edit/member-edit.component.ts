import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { AccountService } from 'src/app/_services/account.service';
import { Member } from 'src/app/_models/member';
import { User } from 'src/app/_models/user';
import { MembersService } from 'src/app/_services/members.service';
import { take } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  @ViewChild('editform') editform!: NgForm;
  member!: Member;
  user!: User;
  @HostListener('window:beforeunload', ['$event']) unloadnotification($event: any) {
    if (this.editform.dirty){
      $event.returnValue = true;
    }
  }



  constructor(private accountService: AccountService, private memberservice: MembersService, private toasterServ: ToastrService) {
    // tslint:disable-next-line: no-non-null-assertion
    this.accountService.currentUser$.pipe(take(1)).subscribe(user => this.user! = user);
  }

  ngOnInit() {
    this.loadMember();
  }


  loadMember()
  {
    // tslint:disable-next-line: no-non-null-assertion
    this.memberservice.getMember(this.user.username!).subscribe(member => {
      this.member = member;
    });
  }

  updateMember()
  {
    this.memberservice.updatMember(this.member).subscribe(() => {
      this.toasterServ.success('Profile updated Successfully');
      this.editform.reset(this.member);
    });
    console.log( this.member);
  }
}
