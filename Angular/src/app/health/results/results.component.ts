import { Component, OnInit } from '@angular/core';
import { Health } from '../health';
import { HealthService } from 'src/app/health.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  
 
  id: any;
  health:Health;

  constructor(private healthService: HealthService,private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.reloadData(); 
  }
  reloadData() {
    this.router.navigate(['results'])
  }

  getHealth(id:number){
    this.health = new Health();

    this.id = this.route.snapshot.params['id'];
    
    this.healthService.getHealth(this.id)
      .subscribe(data => {
        console.log(data)
        this.health = data;
      }, error => console.log(error));
  }

  back(){
    this.router.navigate(['memberpg'])
  }
}

  



