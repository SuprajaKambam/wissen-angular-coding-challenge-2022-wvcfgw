/**
 * Modify this file to fetch and display the login details
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { UserData } from '../types/user.type';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  user; // type this variable using user.type.ts file
  userDetails: UserData;
  constructor(
    private activatedRoute: ActivatedRoute,
    private authenticationService: AuthenticationService
  ) {
    this.activatedRoute.params.subscribe((data) => {
      this.user = data;
      this.getUserdetails();
      console.log(this.user);
    });
  }

  ngOnInit() {}

  getUserdetails() {
    this.authenticationService
      .getUserDetails()
      .pipe()
      .subscribe((data) => {
        this.userDetails = data;
      });
  }

  ngOnDestroy() {}
}
