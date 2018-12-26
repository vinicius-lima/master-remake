import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-device-management",
  templateUrl: "./device-management.component.html",
  styleUrls: ["./device-management.component.css"]
})
export class DeviceManagementComponent implements OnInit {
  hideform: boolean = true;

  constructor() {}

  ngOnInit() {}

  addDevice() {
    this.hideform = !this.hideform;
  }
}
