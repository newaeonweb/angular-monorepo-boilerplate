import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './auth/_model/user';
import { Store, select } from '@ngrx/store';
import { State } from './auth/_statemanagement';
import { LogOut } from './auth/_statemanagement/auth.actions';

@Component({
  selector: 'mab-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'monorepo-angular-boilerplate';

  getState: Observable<any>;
  isAuthenticated = false;
  user: User = null;
  errorMessage = null;

  constructor(private store: Store<State>) {
    this.getState = store.pipe(select('auths'));
  }

  ngOnInit() {
    this.getState.subscribe((state) => {
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
