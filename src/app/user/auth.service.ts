import {Injectable} from '@angular/core';
import {IUser} from './user.model';

@Injectable()
export class AuthService {
  currentUser: IUser;

  loginUser(username: string, password: string): boolean {
    if (username && password === 'password'
    ) {
      this.currentUser = {
        id: 1,
        username: username,
        firstname: 'John',
        lastname: 'Doe'
      };
      console.log(this.currentUser);

      return true;
    }
    return false;
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }
  updateCurrentUser(currentUserInfo) {
    this.currentUser.firstname = currentUserInfo.firstname;
    this.currentUser.lastname = currentUserInfo.lastname;
  }
}
