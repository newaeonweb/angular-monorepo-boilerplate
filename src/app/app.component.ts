import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './_models/user';
import { Store, select } from '@ngrx/store';
import { RootStoreState } from './root-store';
import { LogOut, CheckStatus } from './root-store/auth-store/actions';

@Component({
  selector: 'mab-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'monorepo-angular-boilerplate';

  getState: Observable<any>;
  isAuthenticated = false;
  user: User = null;
  errorMessage = null;

  constructor(private store: Store<RootStoreState.RootState>) {
    this.getState = store.pipe(select('auth'));
  }

  ngOnInit() {
    this.store.dispatch(new CheckStatus());

    this.getState.subscribe(state => {
      console.log(state);
      this.isAuthenticated = state.isAuthenticated;
      this.user = state.user;
      this.errorMessage = state.errorMessage;
    });
  }

  logout(): void {
    this.store.dispatch(new LogOut());
  }
}
