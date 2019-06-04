import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../auth/_model/user';

@Component({
  selector: 'mab-app-home',
  template: `
  <div class="row">
  <div class="col-md-4">

    <h1>Angular + NGRX</h1>
    <hr><br>

    <div *ngIf="isAuthenticated; then doSomething; else doSomethingElse;"></div>
    <ng-template #doSomething>
      <p>You logged in <em>{{user.email}}!</em></p>
      <button class="btn btn-primary" (click)="logout()">Log out</button>
    </ng-template>
    <ng-template #doSomethingElse>
      <a [routerLink]="['/login']" class="btn btn-primary">Log in</a>
      <a [routerLink]="['/signup']" class="btn btn-primary">Sign up</a>
    </ng-template>

    <a [routerLink]="['/status']" class="btn btn-primary">Status</a>

    <br><br><br>

    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Current State</h5>
        <ul>
          <li><strong>isAuthenticated</strong> - {{isAuthenticated}}</li>
          <li><strong>user.email</strong> - {{ user?.email || 'null'}}</li>
          <li><strong>user.token</strong> - {{ user?.token || 'null'}}</li>
          <li><strong>errorMessage</strong> - {{ errorMessage || 'null'}}</li>
        </ul>
      </div>
    </div>

  </div>
</div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {


  getState: Observable<any>;
  isAuthenticated = false;
  user = null;
  errorMessage = null;

  constructor() {}

  ngOnInit() {

  }

  logout(): void {
    console.log('exit');
  }

}
