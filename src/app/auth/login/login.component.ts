import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { User } from '../_model/user';
import { State, selectAuthState } from 'src/app/statemanagement/';
import { Login } from 'src/app/statemanagement/auth.actions';

@Component({
  selector: 'mab-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  getState: Observable<any>;
  errorMessage: string | null;

  constructor(private store: Store<State>) {
    this.getState = store.pipe(select('auths'));
  }

  ngOnInit() {
    this.getState.subscribe((state) => {
      console.log(state);
      this.errorMessage = state.errorMessage;
    });
  }

  onSubmit(): void {
    const payload = {
      email: this.user.email,
      password: this.user.password
    };
    console.log(payload);
    this.store.dispatch(new Login(payload));
  }

}
