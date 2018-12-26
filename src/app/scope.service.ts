import { Injectable } from "@angular/core";
import { AwsMockService } from "./aws-mock.service";
import { DeviceType } from "src/models/device.type";
import { Location } from "src/models/location";
import { Device } from "src/models/device";

@Injectable({
  providedIn: "root"
})
export class ScopeService {
  deviceTypes: DeviceType[];
  locations: Location[];
  devices: Device[] = [];

  constructor(private awsService: AwsMockService) {
    this.deviceTypes = this.awsService.getDeviceTypes();
    this.locations = this.awsService.getLocations();
    this.devices = this.awsService.getRegistredDevices();
  }
}
