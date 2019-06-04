import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';

// App components
import { AppComponent } from './app.component';

// Import sub project inside core main app
import { DashboardSharedModule } from '../../projects/dashboard/src/app/app.module';
import { AdminSharedModule } from '../../projects/admin/src/app/app.module';

// Import application modules
import { HomeModule } from './pages/home/home.module';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './statemanagement';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './statemanagement/auth.effects';
import { environment } from 'projects/admin/src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
    AuthModule,
    DashboardSharedModule.forRoot(),
    AdminSharedModule.forRoot(),
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([AuthEffects]),
    // EffectsModule.forFeature([AuthEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
