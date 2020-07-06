import { Component, OnInit } from '@angular/core';
//import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { race } from 'rxjs';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router) {

  }

  ngOnInit() {
    this.authenticationService.logOut();
    //this.router.navigate(['loginm']);
  }

  logOut(){
    this.authenticationService.logOut();
    //this.router.navigate(['loginm']);
  }

  checkLogin() {
    this.router.navigate([''])
}
  checkLoginM() {
      this.router.navigate(['loginm'])
  }

  checkLoginT() {
    this.router.navigate(['logint'])
  }

  checkLoginA() {
    this.router.navigate(['logina'])
    }
}




