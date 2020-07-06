import { Member } from '../member';
import { Component, OnInit, Input } from '@angular/core';
import { MemberService } from '../member.service';
import { MemberListComponent } from '../member-list/member-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {

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

  list(){
    this.router.navigate(['members']);
  }
}