import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './userprofile/userprofile.component';

export const userRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'updateprofile', component: UserProfileComponent }
];
