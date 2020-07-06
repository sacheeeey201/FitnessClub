import { Component, OnInit } from '@angular/core';
import { Health } from '../health';
import { HealthService } from 'src/app/health.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-health',
  templateUrl: './create-health.component.html',
  styleUrls: ['./create-health.component.css']
})
export class CreateHealthComponent implements OnInit {

  healthReg: FormGroup;
  health: Health = new Health();
  submitted = false;

  constructor(private healthService: HealthService,
    private router: Router,private formBuilder: FormBuilder) { }

  ngOnInit() {
    let trainer=sessionStorage.getItem('currentTrainer');
    if(trainer==null)
    {
      alert("Please Login First")
      this.router.navigate(['logint'])
    }
    else{
      this.router.navigate(['addhr'])
    }

    this.healthReg = this.formBuilder.group({ 
      mid: ['', Validators.required],
      height: ['', Validators.required],
      weight: ['', Validators.required],
      bmi: ['', Validators.required],
      date: ['', Validators.required],
      healthProblem: ['', Validators.required]
    });
  }

  get f(){
    return this.healthReg.controls;
  }

  newHealth(): void {
    this.submitted = false;
    this.health = new Health();
  }

  save() {
    this.healthService.createHealth(this.health)
      .subscribe(data => console.log(data), error => console.log(error));
    this.health = new Health();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  back() {
    this.router.navigate(['trainerpg']);
  }

  gotoList() {
    this.router.navigate(['trainerpg']);
  }
}