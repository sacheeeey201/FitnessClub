import { MemberService } from '../member.service';
import { Member } from '../member';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.css']
})
export class CreateMemberComponent implements OnInit {

  memberReg: FormGroup;
  member: Member = new Member();
  submitted = false;
  

  constructor(private memberService: MemberService,
    private router: Router,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.memberReg = this.formBuilder.group({ 
      name: ['', Validators.required ],
     username: ['', Validators.required ],
      email:['', Validators.required],
      password:['', Validators.required],
      addr:['', Validators.required],
      dob:['', Validators.required],
      gender:['', Validators.required],
      mem_type:['', Validators.required],
      contact: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]  
    });
  }

  get f(){
    return this.memberReg.controls;
  }

  newMember(): void {
    this.submitted = false;
    this.member = new Member();
  }

  save() {
    
    this.memberService.createMember(this.member)
      .subscribe(data => console.log(data), error => console.log(error));
    this.member = new Member();
    alert("Registered Succesfully!");
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['loginm']);
  }
}