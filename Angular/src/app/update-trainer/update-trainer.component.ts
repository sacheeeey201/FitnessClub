import { Component, OnInit } from '@angular/core';
import { Trainer } from '../trainer';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainerService } from '../trainer.service';

@Component({
  selector: 'app-update-trainer',
  templateUrl: './update-trainer.component.html',
  styleUrls: ['./update-trainer.component.css']
})
export class UpdateTrainerComponent implements OnInit {

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

  updateTrainer() {
    this.trainerService.updateTrainer(this.id, this.trainer)
      .subscribe(data => console.log(data), error => console.log(error));
    this.trainer = new Trainer();
    alert("Update Successfully");
    this.router.navigate(['trainerpg']);
  }

  onSubmit() {
    this.updateTrainer();    
    
  }
  back(){
    this.router.navigate(['trainerpg']);
  }
 
}
