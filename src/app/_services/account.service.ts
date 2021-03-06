import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';
import {User} from '../_models/user';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = environment.apiUrl;
 // baseUrl = 'https://localhost:5001/api/';
  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();

constructor(private http: HttpClient) { }

// tslint:disable-next-line: typedef
login(model: any)
{
  return this.http.post(this.baseUrl + 'account/login', model).
  pipe(
    map((response: User) => {
      const user = response;
      if (user)
      {
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUserSource.next(user);
        this.currentUserSource.subscribe(console.log);
      }
    })
  );
}

register(model: any){
  return this.http.post(this.baseUrl + 'account/register', model).pipe(
    map((user: User) => {
      if (user){
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUserSource.next(user);

      }
      // return user;
    })

  );
}

// tslint:disable-next-line: typedef
setCurrentUser(user: User)
{
  this.currentUserSource.next(user);
}

// tslint:disable-next-line: typedef
logout()
{
  localStorage.removeItem('user');
  // tslint:disable-next-line: no-non-null-assertion
  this.currentUserSource.next(null!);
  this.currentUserSource.subscribe(console.log);
}

}
