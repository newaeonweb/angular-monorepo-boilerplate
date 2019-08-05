import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import applications
import { AdminSharedModule } from 'projects/admin/src/app/app.module';
import { DashboardSharedModule } from 'projects/dashboard/src/app/app.module';

// App components
import { HomeModule } from './pages/home/home.module';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomeModule,
    AdminSharedModule.forRoot(),
    DashboardSharedModule.forRoot(),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
