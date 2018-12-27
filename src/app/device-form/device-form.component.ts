import { Component, OnInit } from "@angular/core";
import { ScopeService } from "../scope.service";
import { Device } from "src/models/device";

@Component({
  selector: "app-device-form",
  templateUrl: "./device-form.component.html",
  styleUrls: ["./device-form.component.css"]
})
export class DeviceFormComponent implements OnInit {
  formDevice: Device;
  invalidInput: boolean = true;

  constructor(private scope: ScopeService) {}

  ngOnInit() {
    this.clearFormDevice();
  }

  private clearFormDevice() {
    this.formDevice = {
      id: -1,
      type: Object.assign({}, this.scope.deviceTypes[0]),
      width: 0,
      height: 0,
      battery: false,
      keyboard: false,
      location: Object.assign({}, this.scope.locations[0])
    };
    this.invalidInput = true;
  }

  checkValue(attr: string) {
    if (attr === "width") {
      this.invalidInput = this.formDevice.width < 1;
    } else if (attr === "height") {
      this.invalidInput = this.formDevice.height < 1;
    }
  }

  registerDevice() {
    if (this.scope.addDevice(this.formDevice)) {
      this.clearFormDevice();
    }
  }
}
