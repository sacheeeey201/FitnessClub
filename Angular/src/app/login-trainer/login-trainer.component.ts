import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { TrainerService } from '../trainer.service';
import { Trainer } from '../trainer';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-trainer',
  templateUrl: './login-trainer.component.html',
  styleUrls: ['./login-trainer.component.css']
})
export class LoginTrainerComponent implements OnInit {

  username = ''
  password = ''
  trainer:Trainer;
  currentTrainer:string;
  invalidLogin = false
  invalidString='';
  trainerLogin: FormGroup;

  //forgotpassword
  id=''
  favcolor = ''
  favsport = ''
 
  constructor(private router: Router,
    private loginservice: AuthenticationService,private trainerService:TrainerService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.trainerLogin = this.formBuilder.group({ 
      username: ['', Validators.required],
      password:['', Validators.required],
     });
  }

  get f(){
    return this.trainerLogin.controls;
  }

  checkLogin() {
 
    this.trainerService.getValidTrainer(this.username,this.password)
      .subscribe(data => 
        {
       
        this.trainer = data;
        console.log("details comp trainer data subscribed ");
        console.log(this.trainer);
        console.log(this.trainer.username);
        console.log(this.trainer.t_id);

        if (this.trainer.username.toString()) {
          
          this.currentTrainer = JSON.stringify(this.trainer);
          sessionStorage.setItem('currentTrainer', this.currentTrainer);
          this.invalidString='';     
          this.invalidLogin = false
          this.router.navigate(['trainerpg'])
        } 
      },
      error => console.log(error));
        let usert = sessionStorage.getItem('currentTrainer')
     console.log('Trainer login flag'+!(usert === null))
     
     if(this.invalidLogin == false)
     {
      this.invalidLogin = true
      this.invalidString='Invalid Credentials';
     }
  }
}
