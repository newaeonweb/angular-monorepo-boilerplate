import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// NGRX State management
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/auth/statemanagement';
import { Login } from 'src/app/auth/statemanagement/auth.actions';

// App models
import { User } from '../_model/user';

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
