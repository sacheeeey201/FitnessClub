import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from '../member';
import { AuthenticationService } from '../authentication.service';
import { MemberService } from '../member.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  member:Member;
  currentMember:string;
  invalidLogin = false
  invalidString='';

  //forgotpassword
  id=''
  favcolor = ''
  favsport = ''
  memberLogin: FormGroup;
  

  constructor(private router: Router,
    private loginservice: AuthenticationService,private memberService:MemberService) { }

  ngOnInit() {
  }
/*
  checkLogin() {
 
    this.memberService.getValidMember(this.username,this.password)
      .subscribe(data => {
       
        this.member = data;
        console.log("details component member data subscribed ");
        console.log(this.member);
        
        console.log(this.member.username);


        if (this.member.username.toString()) {
         // sessionStorage.setItem('memberlog', this.username)
          
          this.currentMember = JSON.stringify(this.member);
           //session set for current logged in customer
          sessionStorage.setItem('currentMember', this.currentMember);
          this.invalidString='';
          
          
          this.router.navigate(['memberpg'])
          this.invalidLogin = false
        } 
        else{
          alert("login failed");
          this.invalidString='Login Failed...Please check your username and password';
        }

      },
       error => console.log(error));
     
     let user = sessionStorage.getItem('currentMember')
     console.log('Member login flag'+!(user === null))
     
     if(this.invalidLogin == false)
     {
      //this.invalidLogin = true
      this.invalidString='Login Failed...Please check your username and password';
     }
     
    
  }
*/
  checkLoginA(){
    this.router.navigate(['logina'])
  }

  checkLoginM(){
    this.router.navigate(['loginm'])
  }

  checkLoginT(){
    this.router.navigate(['logint'])
  }
 
}
