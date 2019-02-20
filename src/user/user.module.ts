import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { userRoutes } from './routes';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { UserProfileComponent } from './userprofile/userprofile.component';

@NgModule({
  declarations: [LoginComponent, UserProfileComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule,
    RouterModule.forRoot(userRoutes)
  ],
  exports: [LoginComponent],
  providers: [AuthService]
})
export class UserModule {}
