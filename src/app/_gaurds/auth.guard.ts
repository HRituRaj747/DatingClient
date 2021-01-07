import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccountService } from '../_services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private accntserv: AccountService, private toastr: ToastrService)
  {

  }
  // Hre oberbale is used bcs we are currecnt user is of observable type
  canActivate(): Observable<boolean> {
     return this.accntserv.currentUser$.pipe(
        map(user => {
          if (user) {

            return true;
          }

          else {
            this.toastr.error('You shall not pas!');
            return false;
          }
        })
      );
  }

}
