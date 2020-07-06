import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  [x: string]: any;
  authenticationService: AuthenticationService;
  
  trainerService: any;
  members: any;
  memberid:any;
  tr:any;

  constructor( private router: Router) { }

  ngOnInit() {

    let member=sessionStorage.getItem('currentMember')
    let tr=JSON.stringify(member)
     //alert(tr);
     //alert(tr.substr(10,1));
    this.memberid = tr.substr(10,1);
    
    if(member==null)
    {
      alert("Please Login First")
      this.router.navigate(['loginm'])
    }
    else{
      this.router.navigate(['memberpg'])
    }
  }
  reloadData() {
    this.members = this.memberService.getMembersList();
  }
  
  updateMem(){
    this.router.navigate(['updatem',this.memberid]);
    //this.reloadData();
  }

  products(){
    this.router.navigate(['viewp']);
  }

 healthresults(){
    this.router.navigate(['viewhr']);
  }
  
  cart(){
    this.router.navigate(['viewc']);
  }

  logOut(){
    //this.authenticationService.logOut();
    let member=sessionStorage.getItem('currentMember');
    sessionStorage.removeItem('member');
    sessionStorage.removeItem('currentMember');
    this.router.navigate(['loginm']); 
  }
}
