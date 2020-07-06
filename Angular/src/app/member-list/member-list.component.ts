
import { Observable, from } from "rxjs";
import { MemberService } from "../member.service";
import { Member } from "../member";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: "app-member-list",
  templateUrl: "./member-list.component.html",
  styleUrls: ["./member-list.component.css"]
})
export class MemberListComponent implements OnInit {
  members: Observable<Member[]>;
  authenticationService: AuthenticationService;

  constructor(private memberService: MemberService,
    private router: Router) {}

  ngOnInit() {
    let admin=sessionStorage.getItem('adminsession');
    if(admin==null)
    {
      alert("Please Login First")
      this.router.navigate(['logina'])
    }
    else{
      this.router.navigate(['members'])
    }
    this.reloadData();
  }

  reloadData() {
    this.members = this.memberService.getMembersList();
  }

  deleteMember(id: number) {
    this.memberService.deleteMember(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateMember(id: number){
    this.router.navigate(['updateMA', id]);
  }
  
  memberDetails(id: number){
    this.router.navigate(['detailsm', id]);
  }    
  
  back()  {
    this.router.navigate(['adminpg']); 
  }

//  logOut(){
 //   this.authenticationService.logOut();          
   // this.router.navigate(['loginm']); 
 // }     
 


}
