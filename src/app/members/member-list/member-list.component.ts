import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/_models/member';
import { MembersService } from 'src/app/_services/members.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  //members: Member[] | undefined;

  members$!: Observable<Member[]> | Observable<undefined>;

  constructor(private memberService: MembersService) { }

  ngOnInit() {
   // this.loadMembers();
  // tslint:disable-next-line: no-non-null-assertion
  this.members$ =  this.memberService.getMembers()!;
  }

  // loadMembers()
  // {
  //   this.memberService.getMembers().subscribe(members => {
  //     this.members = members;
  //   });
  // }

}
