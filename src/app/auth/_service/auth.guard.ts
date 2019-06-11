import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AuthState } from 'src/app/root-store/auth-store/reducer';
import { getIsAuthenticated } from 'src/app/root-store/auth-store/state';
import { take, mergeMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private store: Store<AuthState>,
    private router: Router
  ) {}

  canActivate(): Observable<boolean> {
    return this.checkStoreAuth().pipe(
      mergeMap(storeAuth => {
        console.log('store', storeAuth);
        if (storeAuth) {
          return of(true);
        }

        return this.checkApiAuth();
      }),
      map(apiAuth => {
        console.log('api', apiAuth);
        if (!apiAuth) {
          this.router.navigate(['/login']);
          return false;
        }

        return true;
      })
    );
  }

  checkStoreAuth() {
    return this.store.select(getIsAuthenticated).pipe(take(1));
  }

  checkApiAuth() {
    return of(this.authService.isAuthenticated());
  }
}
