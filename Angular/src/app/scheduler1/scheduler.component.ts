import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {DayPilot, DayPilotSchedulerComponent} from "daypilot-pro-angular";
import {DataService, EventCreateParams, EventDeleteParams, EventMoveParams} from "../data.service";
import { Router } from '@angular/router';

@Component({
  selector: 'scheduler-component',
  template: `
  <div class="body" >
    <h1>Scheduler</h1><br/>
    <daypilot-scheduler [config]="config" [events]="events" #scheduler></daypilot-scheduler><br/><br/>
  </div>
  <button (click)=back() class="btn btn-success">Back </button>
  `,
  styles: [`.body { padding: 10px;} h1{color:white;} `]
})
export class SchedulerComponent implements AfterViewInit {

  constructor(private ds: DataService,
    private router:Router) {}

  @ViewChild("scheduler", {static: false})
  scheduler: DayPilotSchedulerComponent;

  events: any;

  config: any = {
    timeHeaders : [
      {groupBy: "Month", format: "MMMM yyyy"},
      {groupBy: "Day", format: "d"}
    ],
    days: 31,
    startDate: "2020-05-01",
    scale: "Day",
    treeEnabled: true,
    eventDeleteHandling: "Update",
    onEventDelete: args => {
      let params: EventDeleteParams = {
        id: args.e.id(),
      };
      this.ds.deleteEvent(params).subscribe(result => {
        this.scheduler.control.message("Event deleted");
        this.router.navigate(['scheduler']);
      });

    },
    onTimeRangeSelected: args => {
      DayPilot.Modal.prompt("New event name:", "Event").then(modal => {
        this.scheduler.control.clearSelection();
        if (!modal.result) {
          return;
        }

        let params: EventCreateParams = {
          start: args.start.toString(),
          end: args.end.toString(),
          text: modal.result,
          resource: args.resource
        };
        this.ds.createEvent(params).subscribe(result => {
          this.events.push(result);
          this.scheduler.control.message("Event created");
          this.router.navigate(['scheduler']);
        } );

      });
    },
    onEventMove: args => {
      let params: EventMoveParams = {
        id: args.e.id(),
        start: args.newStart.toString(),
        end: args.newEnd.toString(),
        resource: args.newResource
      };
      this.ds.moveEvent(params).subscribe(result => {
        this.scheduler.control.message("Event moved");
        this.router.navigate(['scheduler']);
      });
    }
  };

  

  ngAfterViewInit(): void {
    this.ds.getResources().subscribe(result => this.config.resources = result);

    var from = this.scheduler.control.visibleStart();
    var to = this.scheduler.control.visibleEnd();
    this.ds.getEvents(from, to).subscribe(result => this.events = result);

  }

back(){
  this.router.navigate(['adminpg'])
}


}
