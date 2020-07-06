import { TrainerDetailsComponent } from '../trainer-details/trainer-details.component';
import { Observable } from "rxjs";
import { TrainerService } from "../trainer.service";
import { Trainer } from "../trainer";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-trainer-list",
  templateUrl: "./trainer-list.component.html",
  styleUrls: ["./trainer-list.component.css"]
})
export class TrainerListComponent implements OnInit {
  trainers: Observable<Trainer[]>;

  constructor(private trainerService: TrainerService,
    private router: Router) {}

  ngOnInit() {
    let admin=sessionStorage.getItem('adminsession');
    if(admin==null)
    {
      alert("Please Login First")
      this.router.navigate(['logina'])
    }
    else{
      this.router.navigate(['trainers'])
    }
    this.reloadData();
  }

  reloadData() {
    
    this.trainers = this.trainerService.getTrainersList();
  }

  deleteTrainer(id: number) {
    this.trainerService.deleteTrainer(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  trainerDetails(id: number){
    this.router.navigate(['detailst', id]);
  }

  updateTrainer(id: number){
    this.router.navigate(['updateTA', id]);
  }

  back()  {
    this.router.navigate(['adminpg']); 
  }
}