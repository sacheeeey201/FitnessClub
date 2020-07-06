  import { Component, OnInit } from '@angular/core';
import { Health } from '../health';
import { ActivatedRoute, Router } from '@angular/router';
import { HealthService } from 'src/app/health.service';

  @Component({
    selector: 'app-update-health',
    templateUrl: './update-health.component.html',
    styleUrls: ['./update-health.component.css']
  })
  export class UpdateHealthComponent implements OnInit {

    
    id: number;
    health: Health;

    constructor(private route: ActivatedRoute,private router: Router,
      private healthService: HealthService) { }

    ngOnInit() {
      this.health = new Health();

      this.id = this.route.snapshot.params['id'];
      
      this.healthService.getHealth(this.id)
        .subscribe(data => {
          console.log(data)
          this.health = data;
        }, error => console.log(error));
    }

    updateHealth() {
      this.healthService.updateHealth(this.id, this.health )
        .subscribe(data => console.log(data), error => console.log(error));
      this.health = new Health();
      this.gotoList();
    }

    onSubmit() {
      this.updateHealth();  
      this.router.navigate(['viewhr'])  
    }
 
    gotoList() {                
      this.router.navigate(['results']);
    }
  }

