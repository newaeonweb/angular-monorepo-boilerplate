import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminSharedModule } from 'projects/admin/src/app/app.module';
import { DashboardSharedModule } from 'projects/dashboard/src/app/app.module';

// App components
import { NotFoundComponent } from './core/components/not-found.component';
import { HomeModule } from './pages/home/home.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('../../projects/admin/src/app/app.module').then(
        m => m.AdminSharedModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../../projects/dashboard/src/app/app.module').then(
        m => m.DashboardSharedModule
      ),
  },
  // {
  //   path: '**',
  //   component: NotFoundComponent
  // }
];

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
