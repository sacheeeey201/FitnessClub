import { Component, OnInit } from '@angular/core';
import { ContactUs } from './contactus';
import { ContactusService } from '../contactus.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  contactUs:ContactUs = new ContactUs;

  submitted: boolean;

  constructor(private contactusService: ContactusService,
    private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  newContactUs(): void {
    this.submitted = false;
    this.contactUs = new ContactUs();
  }
  
   save() {
    this.contactusService.createCU(this.contactUs)
      .subscribe(data => console.log(data), error => console.log(error));
   // this.contactUs = new ContactUs();
    
  } 
  clearForm(){

  this.contactUs.name='';
  this.contactUs.contact='';
  this.contactUs.message='';
  this.contactUs.email='';
  }


  onSubmit() {
    this.submitted = true;
    this.save();    
    alert("Received your Query...We'll reach you soon...!!!");
    this.clearForm();
    this.reloadData();
  }
 
  reloadData()
  {
   // this.contactUs=this.contactusService.newContactUs();
    this.router.navigate(['cu'])
  }
}


