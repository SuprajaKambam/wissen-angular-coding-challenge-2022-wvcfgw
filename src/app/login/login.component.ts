import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
/**
 * Modify the login component and the login template to collect login details and add the validators as necessary
 */
import { AuthenticationService } from '../services/authentication.service';

@Component({
  templateUrl: 'login.component.html',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  isValidUser: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    // setup the loginform and validators
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [
        Validators.required,
        this.usernameValidator.bind(this),
      ]),
      password: new FormControl('', [
        Validators.required,
        this.passwordValidator.bind(this),
      ]),
      checkbox: new FormControl(false),
    });
  }

  onLogin() {
    if (this.loginForm.valid && this.checkbox.value === true) {
      this.isValidUser = this.authenticationService.login(
        this.email.value,
        this.password.value
      );
      if (this.isValidUser) {
        this.router.navigateByUrl(`welcome/${this.email.value}`);
      }
    } else {
      alert('Entered UserName/Password is invalid');
    }
  }

  get email() {
    return this.loginForm.get('email') as FormControl;
  }

  get password() {
    return this.loginForm.get('password') as FormControl;
  }

  get checkbox() {
    return this.loginForm.get('checkbox') as FormControl;
  }

  ngOnDestroy() {}

  // implement the username validator. Min 6 characters and no digits, special chars
  usernameValidator(fctrl: FormControl) {
    if (!fctrl.value.match('[a-zA-z]{6,30}$')) {
      return { invalid: true };
    }
  }

  // implement the password validator
  // Min 1 uppercase, 1 lower case and a digit. Total length >= 8
  passwordValidator(fCtrl: FormControl) {
    if (!fCtrl.value.match('[a-zA-z0-9]$')) return false;
  }
}
