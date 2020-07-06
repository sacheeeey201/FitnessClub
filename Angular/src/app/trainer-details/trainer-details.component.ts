import { Trainer } from '../trainer';
import { Component, OnInit, Input } from '@angular/core';
import { TrainerService } from '../trainer.service';
import { TrainerListComponent } from '../trainer-list/trainer-list.component';
import { Router, ActivatedRoute } from '@angular/router';
import { UpdateTrainerComponent } from '../update-trainer/update-trainer.component';

@Component({
  selector: 'app-trainer-details',
  templateUrl: './trainer-details.component.html',
  styleUrls: ['./trainer-details.component.css']
})
export class TrainerDetailsComponent implements OnInit {

  id: number;
  trainer: Trainer;

  constructor(private route: ActivatedRoute,private router: Router,
    private trainerService: TrainerService) { }

  ngOnInit() {
    this.trainer = new Trainer();

    this.id = this.route.snapshot.params['id'];
    
    this.trainerService.getTrainer(this.id)
      .subscribe(data => {
        console.log(data)
        this.trainer = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['trainer']);
  }
}