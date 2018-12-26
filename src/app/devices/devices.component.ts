import { Component, OnInit } from "@angular/core";
import { ScopeService } from "../scope.service";

@Component({
  selector: "app-devices",
  templateUrl: "./devices.component.html",
  styleUrls: ["./devices.component.css"]
})
export class DevicesComponent implements OnInit {
  constructor(private scope: ScopeService) {}

  ngOnInit() {}
}
