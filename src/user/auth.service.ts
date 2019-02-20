import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable()
export class AuthService {
  currentUser: IUser;
  login(username, password) {

    console.log(username);
    console.log(password);
    this.currentUser = {
      firstName: 'Mohd',
      lastName: 'Arshad',
      userName: 'arshad.md',
      password: 'helloarshad'
    };
  }

  isAuthenticated(): boolean {
    if (this.currentUser) {
      return true;
    } else {
      return false;
    }
  }

  updateCurrentUserDetails(fName, lName) {
    this.currentUser.firstName = fName;
    this.currentUser.lastName = lName;
  }
}
