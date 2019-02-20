import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login-div',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {

  private username: string;
  private password: string;
  constructor(private auth: AuthService, private router: Router) { }

  login(loginform) {

    this.username = loginform.username;
    this.password = loginform.password;

    this.auth.login(this.username, this.password);
    console.log('Login method is called' + JSON.stringify(loginform));
    this.router.navigate(['events']);
  }
}
