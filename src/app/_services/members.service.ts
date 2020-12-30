import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Member } from '../_models/member';

const httpOptions = {
  headers : new HttpHeaders ({

    // tslint:disable-next-line: no-non-null-assertion
    Authorization : 'Bearer ' + JSON.parse(localStorage.getItem('user')!)?.token
  })
}

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseUrl = environment.apiUrl;

constructor(private http: HttpClient) {}

getMembers()
{
  return this.http.get<Member[]>(this.baseUrl + 'users', httpOptions);
}

getMember(username: string)
{
  // return this.http.get<Member[]>(this.baseUrl + 'users/' + username, httpOptions);
  return this.http.get<Member>(this.baseUrl + 'users/' + username);

}

}
