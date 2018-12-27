import { Component, OnInit } from "@angular/core";
import { ScopeService } from "../scope.service";

@Component({
  selector: "app-device-management",
  templateUrl: "./device-management.component.html",
  styleUrls: ["./device-management.component.css"]
})
export class DeviceManagementComponent implements OnInit {
  hideform: boolean = true;

  constructor(private scope: ScopeService) {}

  ngOnInit() {}

  addDevice() {
    this.hideform = !this.hideform;
  }

  refresh() {
    this.scope.refresh();
  }
}
