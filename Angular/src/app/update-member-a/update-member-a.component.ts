import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-update-member-a',
  templateUrl: './update-member-a.component.html',
  styleUrls: ['./update-member-a.component.css']
})
export class UpdateMemberAComponent implements OnInit {

  id: number;
  member: Member;

  constructor(private route: ActivatedRoute,private router: Router,
    private memberService: MemberService) { }

  ngOnInit() {
    this.member = new Member();

    this.id = this.route.snapshot.params['id'];
    
    this.memberService.getMember(this.id)
      .subscribe(data => {
        console.log(data)
        this.member = data;
      }, error => console.log(error));
  }

  updateMember() {
    this.memberService.updateMember(this.id, this.member )
      .subscribe(data => console.log(data), error => console.log(error));
    this.member = new Member();
    this.gotoList();
  }

  onSubmit() {
    this.updateMember();    
  }     

  gotoList() {
    this.router.navigate(['members']);
  }

  back(){
    this.router.navigate(['members']);
  }
}
