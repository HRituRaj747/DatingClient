import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Member } from '../_models/member';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers : new HttpHeaders ({

    // tslint:disable-next-line: no-non-null-assertion
    Authorization : 'Bearer ' + JSON.parse(localStorage.getItem('user')!)?.token
  })
};

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseUrl = environment.apiUrl;
  members: Member[] = [] ;

constructor(private http: HttpClient) {}

getMembers()
{
  if (this.members.length > 0) { return of(this.members); }

  return this.http.get<Member[]>(this.baseUrl + 'users', httpOptions).pipe(map(mem => {
    this.members = mem;
    return this.members;
  }));
}

getMember(username: string)
{
  // return this.http.get<Member[]>(this.baseUrl + 'users/' + username, httpOptions);
  const member = this.members.find(x => x.userName === username);
  if (member !== undefined) {
  return of(member); }
  return this.http.get<Member>(this.baseUrl + 'users/' + username);

}

updatMember(member: Member)
{
  return this.http.put(this.baseUrl + 'users' , member).pipe(map(() => {
    const index = this.members.indexOf(member);
    this.members[index] = member;
  }));
}
}
