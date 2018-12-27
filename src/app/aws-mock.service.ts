import { Injectable } from "@angular/core";
import { DeviceType } from "src/models/device.type";
import { Location } from "src/models/location";
import { Device } from "src/models/device";

@Injectable({
  providedIn: "root"
})
export class AwsMockService {
  devicesTypes: DeviceType[] = [
    { id: 0, value: "Any" },
    { id: 1, value: "Desktop PC" },
    { id: 2, value: "Laptop" },
    { id: 3, value: "Smartphone" },
    { id: 4, value: "SmartTV" },
    { id: 5, value: "Tablet" }
  ];

  locations: Location[] = [
    { id: 0, value: "Bedroom" },
    { id: 1, value: "Home Office" },
    { id: 2, value: "Living Room" },
    { id: 3, value: "Mobile" },
    { id: 4, value: "Office" }
  ];

  devices: Device[] = [
    {
      id: 470,
      type: this.devicesTypes[2],
      width: 1366,
      height: 768,
      battery: true,
      keyboard: true,
      location: this.locations[2]
    },
    {
      id: 628,
      type: this.devicesTypes[1],
      width: 1920,
      height: 1080,
      battery: false,
      keyboard: true,
      location: this.locations[1]
    },
    {
      id: 668,
      type: this.devicesTypes[3],
      width: 640,
      height: 960,
      battery: true,
      keyboard: false,
      location: this.locations[3]
    }
  ];

  constructor() {}

  getDeviceTypes(): DeviceType[] {
    return this.devicesTypes;
  }

  getLocations(): Location[] {
    return this.locations;
  }

  getRegistredDevices(): Device[] {
    return this.devices;
  }

  addDevice(device: Device): boolean {
    const old_len = this.devices.length;
    const new_len = this.devices.push(device);
    return new_len > old_len;
  }
}
