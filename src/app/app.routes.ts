import { Routes } from '@angular/router';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { HomeComponent } from './components/home/home.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { LayoutComponent } from './components/layout/layout.component';

export const routes: Routes = [
  { path: 'user-details/:id', component: UserDetailsComponent },
  {
    path: 'admin',
    component: LayoutComponent, // just layout
    children: [
      { path: 'home', component: HomeComponent }, // now just page content
      { path: 'user-search', component: UserManagementComponent },
      { path: 'user-operations', component: UserDetailsComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
  { path: '', redirectTo: 'admin/home', pathMatch: 'full' },
  { path: '**', redirectTo: 'admin/home' },
];
