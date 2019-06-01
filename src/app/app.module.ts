import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';

// App components
import { AppComponent } from './app.component';

// Import sub project inside core main app
import { DashboardSharedModule } from '../../projects/dashboard/src/app/app.module';
import { AdminSharedModule } from '../../projects/admin/src/app/app.module';
import { HomeModule } from './pages/home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
    DashboardSharedModule.forRoot(),
    AdminSharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
