import { TrainerService } from '../trainer.service';
import { Trainer } from '../trainer';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-trainer',
  templateUrl: './create-trainer.component.html',
  styleUrls: ['./create-trainer.component.css']
})
export class CreateTrainerComponent implements OnInit {

  trainerReg: FormGroup;

  tl:string[]=[];
  //trainer1:Trainer=new Trainer("","","","","");

  trainer: Trainer = new Trainer();
  submitted = false;

  constructor(private trainerService: TrainerService,
    private router: Router,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.trainerReg = this.formBuilder.group({ 
      name: ['', Validators.required,],
     username: ['', Validators.required,],
      email:['', Validators.required],
      password:['', Validators.required],
      contact: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]  ,
      addr: ['', Validators.required],
      dob:['', Validators.required],
      gender:['', Validators.required],
      experience:['', Validators.required],
      speciality:['', Validators.required]
    });
    
  }

  get f(){
      return this.trainerReg.controls;
    }

  newTrainer(): void {
    this.submitted = false;
    this.trainer = new Trainer();
  }

  save() {
    this.trainerService.createTrainer(this.trainer)
      .subscribe(data => console.log(data), error => console.log(error));
    this.trainer = new Trainer();
    alert("Registered Succesfully!");
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['logint']);
  }
}
