import {Component} from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import {ToastService} from '../common/toast.service';

@Component({
  selector: 'user-login',
  templateUrl: './login.component.html',
  styles: [`
    em { float: right; color: #E05C65; padding-left: 10px; }
  `]
})
export class LoginComponent {
  constructor(
    public authService: AuthService,
    private router: Router,
    private messageSvc: ToastService
  ) { }
  username: string;
  password: string;
  mouseOverLogin: boolean;

  login(value: any) {
    console.log(value);
    const isLoggedIn: boolean = this.authService.loginUser(value.username, value.password);
    if (isLoggedIn) {
      this.router.navigate(['events']);
    } else {
      this.password = '';
      this.messageSvc.error('Login Incorrect');
    }
  }
  cancel() {
    this.router.navigate(['events']);
  }

  setMouseOverLogin(mouseOver: boolean): void {
    this.mouseOverLogin = mouseOver;
  }
}
