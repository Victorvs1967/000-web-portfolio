import { modal } from 'src/app/service/dialog.decorator';
import { LoginComponent } from './../auth/component/login/login.component';
import { DialogService } from './../service/dialog.service';
import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {

  auth = inject(AuthService);
  dialog = inject(DialogService);

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.auth.onLogin() || (this.auth.getUser() === 'hero')) {
      this.login();
      return false;
    }
    return true;
  }

  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.auth.logout();
    return true;
  }

  @modal(LoginComponent)
  login() { }

}
