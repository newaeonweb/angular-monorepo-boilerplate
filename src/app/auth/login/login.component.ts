import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { SubscriptionLike } from 'rxjs';

// NGRX State management
import { Store, select } from '@ngrx/store';
import { Login } from '../../root-store/auth-store/actions';
import { AuthState } from 'src/app/root-store/auth-store/reducer';

// App models
import { User } from '../../_models/user';

@Component({
  selector: 'mab-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  user: User = new User();
  getState: Observable<any>;
  errorMessage: string | null;

  subscription: SubscriptionLike;

  constructor(private store: Store<AuthState>) {
    this.getState = store.pipe(select('auth'));
  }

  ngOnInit() {
    this.subscription = this.getState.subscribe(state => {
      this.errorMessage = state.errorMessage;
    });
  }

  onSubmit(): void {
    const payload = {
      email: this.user.email,
      password: this.user.password,
    };
    this.store.dispatch(new Login(payload));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
