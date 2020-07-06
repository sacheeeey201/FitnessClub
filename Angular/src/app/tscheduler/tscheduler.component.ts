import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { DayPilotSchedulerComponent, DayPilot } from 'daypilot-pro-angular';
import { EventDeleteParams, EventCreateParams, EventMoveParams, DataService } from '../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'tscheduler-component',
  template: `
  <div class="body" >
    <h1>Scheduler</h1>
    <daypilot-scheduler [config]="config" [events]="events" #scheduler></daypilot-scheduler>
  </div>
  <button (click)=back() class="btn btn-success">Back </button>
  `,
  styles: [`.body { padding: 10px; }`]
})


export class TschedulerComponent implements AfterViewInit {

  @ViewChild("scheduler", {static: false})
  tscheduler: DayPilotSchedulerComponent;

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
   /* onEventDelete: args => {
      let params: EventDeleteParams = {
        id: args.e.id(),
      };
      this.ds.deleteEvent(params).subscribe(result => {
        this.tscheduler.control.message("Event deleted");
      });

    },
    onTimeRangeSelected: args => 
    {
      DayPilot.Modal.prompt("New event name:", "Event").then(modal => 
        {
        this.tscheduler.control.clearSelection();
        if (!modal.result)
         {
          return;
          }

        let params: EventCreateParams = 
        {
          start: args.start.toString(),
          end: args.end.toString(),
          text: modal.result,
          resource: args.resource
        };
        this.ds.createEvent(params).subscribe(result => 
          {
          this.events.push(result);
          this.tscheduler.control.message("Event created");
        } );

      });
    },*/
   /* onEventMove: args => {
      let params: EventMoveParams = {
        id: args.e.id(),
        start: args.newStart.toString(),
        end: args.newEnd.toString(),
        resource: args.newResource
      };
      this.ds.moveEvent(params).subscribe(result => {
        this.tscheduler.control.message("Event moved");
      });
    } */
  };

  constructor(private ds: DataService,
    private router:Router) {}

  ngAfterViewInit(): void {
    this.ds.getResources().subscribe(result => this.config.resources = result);

    var from = this.tscheduler.control.visibleStart();
    var to = this.tscheduler.control.visibleEnd();
    this.ds.getEvents(from, to).subscribe(result => this.events = result);

  }

back(){
  this.router.navigate(['trainerpg'])
}


}

