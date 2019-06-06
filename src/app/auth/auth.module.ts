import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthRoutingModule } from './auth-routing.module';

// Application components

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// Environment
import { environment } from '../../environments/environment';

// NGRX State modules
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './_statemanagement';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './_statemanagement/auth.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AuthRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([AuthEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []

  ]
})
export class AuthModule { }
