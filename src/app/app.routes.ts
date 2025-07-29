import { Routes } from '@angular/router';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { HomeComponent } from './components/home/home.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'user-details/:id', component: UserDetailsComponent }, // optional

  {
    path: 'admin',
    component: LayoutComponent,
    canActivate: [AuthGuard], // 🔐 protect parent route
    canActivateChild: [AuthGuard], // 🔐 protect all children too
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'user-search', component: UserManagementComponent },
      { path: 'user-operations', component: UserDetailsComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },

  { path: '', redirectTo: 'admin/home', pathMatch: 'full' },
  { path: '**', redirectTo: 'admin/home' },
];
