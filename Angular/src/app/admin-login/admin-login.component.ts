import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  username = '';
  password = '';
  invalidLogin = false;
  invalidString='';
  adminLogin: FormGroup;
 
  

  constructor(private router: Router,
    private loginservice: AuthenticationService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.adminLogin = this.formBuilder.group({ 
      username: ['', Validators.required],
      password:['', Validators.required],
     });
  }

  get f(){
    return this.adminLogin.controls;
  }

  checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password))
     {
      this.router.navigate(['adminpg'])
      this.invalidString='';
      this.invalidLogin = false;
    } else
      this.invalidLogin = true;
      this.invalidString='Invalid Credentials';
  }

}
