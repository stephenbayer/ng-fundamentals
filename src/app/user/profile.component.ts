import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import {ToastService} from '../common/toast.service';

@Component({
  templateUrl: './profile.component.html',
  styles: [`
    em { float: right; color: #E05C65; padding-left: 10px; }
    .error input { background-color: #E3A3A5; }
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error :-ms-input-placeholder { color: #999; }
  `]
})
export class ProfileComponent implements OnInit {
  constructor (
    private authService: AuthService,
    private router: Router,
    private toastr: ToastService
) { }
  profileForm: FormGroup;
  firstname: FormControl;
  lastname: FormControl;

  ngOnInit(): void {
    const user = this.authService.currentUser;
    if (user) {
      this.firstname =
        new FormControl(
          user.firstname,
          [
            Validators.required,
            Validators.pattern('[a-zA-Z].*')
          ]
        );
      this.lastname =
        new FormControl(
          user.lastname,
          Validators.required
        );

      this.profileForm = new FormGroup({
        firstname: this.firstname,
        lastname: this.lastname
      });
    } else {
      this.router.navigate(['']);
    }
  }

  cancel(): void {
    this.router.navigate(['']);
  }

  saveProfile(profile: any) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser({
        firstname: profile.firstname,
        lastname: profile.lastname
      });
      this.toastr.success('User Profile Saved!');
    }
  }
  checkFirstNameValid() {
    return this.firstname.valid || this.firstname.untouched;
  }
  checkLastNameValid() {
    return this.lastname.valid || this.lastname.untouched;
  }
}
