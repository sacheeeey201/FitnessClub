import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  authenticationService: AuthenticationService;
  
  admin: any;
  trainerService: any;  
  memberService: any;  
  members: any;
  trainer: any;

  constructor( private router: Router) { }

  ngOnInit() {
    let admin=sessionStorage.getItem('adminsession');
    if(admin==null)
    {
      this.router.navigate(['logina'])
    }
    else{
      this.router.navigate(['adminpg'])
    }
  }

  reloadData() {
    this.members = this.memberService.getMembersList();
    this.trainer = this.trainerService.getTrainersList();
  }

  listM(){
    this.router.navigate(['members']);
  }

  listT(){
    this.router.navigate(['trainer']);
  }

  listP(){
    this.router.navigate(['products']);
  }

  addp(){
    this.router.navigate(['addp']);
  }

  scheduler(){
    this.router.navigate(['scheduler']);
  }

  logOut(){
    //this.authenticationService.logOut();
    let admin=sessionStorage.getItem('adminsession');
    sessionStorage.removeItem('admin');
    sessionStorage.removeItem('adminsession');
    this.router.navigate(['logina']);
  }
}


