import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AuthState } from 'src/app/root-store/auth-store/reducer';
import { selectIsLoggedIn } from 'src/app/root-store/auth-store/state';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  cstate$: Observable<any>;
  isAuth: boolean;
  constructor(
    private authService: AuthService,
    private store: Store<AuthState>,
    private router: Router
  ) {}

  canActivate(): boolean {
    this.store
      .pipe(select(selectIsLoggedIn))
      .subscribe(state => (this.isAuth = state));

    console.log(this.isAuth);

    if (!this.authService.getToken()) {
      this.router.navigateByUrl('/login');
      return false;
    }
    return true;
  }
}
