import {DataService} from "../data.service";
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {SchedulerComponent} from "./scheduler.component";
import {DayPilotModule} from "daypilot-pro-angular";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    DayPilotModule
  ],
  declarations: [
    SchedulerComponent
  ],
  exports: [SchedulerComponent],
  providers: [DataService]
})
export class SchedulerModule {
  
}