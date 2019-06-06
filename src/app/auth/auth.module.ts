import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { TokenService } from './_service/token.service';


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

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenService,
      multi: true
    }
  ]
})
export class AuthModule { }
