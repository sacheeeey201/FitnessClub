import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Health } from '../health';
import { HealthService } from 'src/app/health.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-health',
  templateUrl: './view-health.component.html',
  styleUrls: ['./view-health.component.css']
})
export class ViewHealthComponent implements OnInit {

  health: Observable<Health[]>;

  constructor(private healthService: HealthService,
    private router: Router) {}

  ngOnInit() {
    // let trainer=sessionStorage.getItem('currentTrainer');
    // if(trainer==null)
    // {
    //   alert("Please Login First")
    //   this.router.navigate(['logint'])
    // }
    // else{
    //   this.router.navigate(['viewhr'])
    // }
    this.reloadData();
  }

  reloadData() {
    this.health = this.healthService.getHealthList();
    console.log(this.health);
  }

  update(id: number){
    this.router.navigate(['updatehr', id]);
  }

  
  back(){
    this.router.navigate(['trainerpg'])
  }
}
