import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {
  authenticationService: AuthenticationService;
  
  trainers: any;
  trainerService: any;
  tr: any;
  trainerid:any;

  constructor( private router: Router) { }

  ngOnInit() {
    let trainer=sessionStorage.getItem('currentTrainer')
    let tr=JSON.stringify(trainer)
     //alert(tr);
     //alert(tr.substr(11,1));
    this.trainerid=tr.substr(11,1);

    if(trainer==null)
    {
      alert("Please Login First")
      this.router.navigate(['logint'])
    }
    else{
      this.router.navigate(['trainerpg'])
    }
  
  }

  reloadData() {
    this.trainers = this.trainerService.getTrainersList();
  
  }

  list(){
    this.router.navigate(['trainer']);
  }

  scheduler(){
    this.router.navigate(['tscheduler']);
  }

  updateTrainer( ){

    this.router.navigate(['updatet',this.trainerid]);
    this.reloadData();
  }

  viewhr(){
    this.router.navigate(['viewhr']);
  }
  addhr(){
    this.router.navigate(['addhr']);
  }
  logOut(){
    let trainer=sessionStorage.getItem('currentTrainer');
    sessionStorage.removeItem('trainer');
    sessionStorage.removeItem('currentTrainer');
    this.router.navigate(['logint']);
  }
}
