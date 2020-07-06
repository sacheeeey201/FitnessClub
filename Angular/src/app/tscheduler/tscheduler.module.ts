import {DataService} from "../data.service";
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {TschedulerComponent} from "./tscheduler.component";
import {DayPilotModule} from "daypilot-pro-angular";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    DayPilotModule
  ],
  declarations: [
    TschedulerComponent
  ],
  exports: [TschedulerComponent],
  providers: [DataService]
})
export class TschedulerModule {
  
}