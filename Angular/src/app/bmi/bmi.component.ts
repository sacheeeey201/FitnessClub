import { Component, OnInit } from '@angular/core';
import { Bmi } from './bmi';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent implements OnInit {
 

  
  submitted = false;
  bmi: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.bmi = this.formBuilder.group({ 
      hgt: ['', Validators.required],
      wgt:['', Validators.required],
      age: ['', Validators.required],
      gender:['', Validators.required],
     });
  }
  get f(){
    return this.bmi.controls;
  }
  

  onSubmit(){

  }
  // onSubmit() {
    
  //   var f = self.document.forms[0];
  //   let w = f.wgt.value;
  //   let h = f.htf.value;
 
  //   this.submitted = true;
  //   this.cal_bmi(w,h);    
  // }
  // cal_bmi(lbs, ins)
  // { 
  //     let h2 = ins * ins;
  //     let bmi = lbs/h2 * 703;
  //     let f_bmi = Math.floor(bmi);
  //     let diff  = bmi - f_bmi;
  //     diff = diff * 10;
  //     diff = Math.round(diff);
  //     if (diff == 10)    // Need to bump up the whole thing instead
  //     {
  //       f_bmi += 1;
  //       diff   = 0;
  //     }
  //    // bmi = f_bmi + "." + diff;
  //     return bmi;
  //   }
  // compute()
  // {
  //     var f = self.document.forms[0];
  //     let w = f.wt.value;
  //     let v = f.htf.value;
  //     let u = f.hti.value;
  //     if (!this.chkw(u))
  //     {
  //     var ii = 0;
  //     f.hti.value = 0;
  //     } else
  //     {
  //     let it = f.hti.value*1;
  //     var ii = it;
  //     }
  //     var fi = f.htf.value * 12;
  //     var i =  f.htf.value * 12 + f.hti.value*1.0;  
  //     if (!this.chkw(v))
  //     {
  //     alert("Please enter a number for your height.");
  //     f.htf.focus();
  //     return;
  //     }
  //     if (!this.chkw(w))
  //     {
  //     alert("Please enter a number for your weight.");
  //     f.wt.focus();
  //     return;
  //     }
  //     // Perform the calculation
  //     f.bmi.value = this.cal_bmi(w, i);
  //     f.bmi.focus();
  // }

  //   chkw(w){
  //     if (isNaN(parseInt(w))){
  //       return false;
  //     } else if (w < 0){
  //       return false;
  //     }
  //     else{
  //       return true;
  //     }
  //   }
}