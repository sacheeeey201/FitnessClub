import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { MemberService } from '../member.service';
import { Member } from '../member';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-member',
  templateUrl: './login-member.component.html',
  styleUrls: ['./login-member.component.css']
})
export class LoginMemberComponent implements OnInit {

  username = ''
  password = ''
  member:Member;
  currentMember:string;
  invalidLogin = false
  invalidString='';
  memberLogin: FormGroup;
  members: Member = new Member();
  //forgotpassword
  id=''
  favcolor = ''
  favsport = ''
  static memberLogin: any;
  

  constructor(private router: Router,
    private loginservice: AuthenticationService,private memberService:MemberService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.memberLogin = this.formBuilder.group({ 
     username: ['', Validators.required],
     password:['', Validators.required],
    });
  }

  get f(){
    return this.memberLogin.controls;
  }

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
         // this.invalidString='Invalid Credentials';
        }

      },
       error => console.log(error));
     
     let user = sessionStorage.getItem('currentMember')
     console.log('Member login flag'+!(user === null))
     
     if(this.invalidLogin == false)
     {
      //this.invalidLogin = true
      this.invalidString='Invalid Credentials';
     }
     
    
  }



}
