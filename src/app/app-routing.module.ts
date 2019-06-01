import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminSharedModule } from 'projects/admin/src/app/app.module';
import { DashboardSharedModule } from 'projects/dashboard/src/app/app.module';

// App components
import { NotFoundComponent } from './core/not-found.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('../../projects/admin/src/app/app.module').then(m => m.AdminSharedModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('../../projects/dashboard/src/app/app.module').then(m => m.DashboardSharedModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AdminSharedModule.forRoot(),
    DashboardSharedModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
