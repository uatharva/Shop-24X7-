import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AdminGuardService implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let user = localStorage.getItem('user');
    //  JSON.parse(user)['type']
    if (typeof user === 'string' && user === 'admin') {
      return true;
    } else {
      this.router.navigate([''], {
        queryParams: {
          return: state.url,
        },
      });
      return false;
    }
  }
}
