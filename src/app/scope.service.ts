import { Injectable } from "@angular/core";
import { AwsMockService } from "./aws-mock.service";
import { DeviceType } from "src/models/device.type";
import { Location } from "src/models/location";
import { Device } from "src/models/device";
import { AwsApiGatewayService } from "./aws-api-gateway.service";
import { DeviceDTO } from "src/models/device.dto";

@Injectable({
  providedIn: "root"
})
export class ScopeService {
  deviceTypes: DeviceType[];
  locations: Location[];
  devices: Device[] = [];

  constructor(
    private awsMockService: AwsMockService,
    private awsApiGateway: AwsApiGatewayService
  ) {
    this.deviceTypes = this.awsMockService.getDeviceTypes();
    this.locations = this.awsMockService.getLocations();
    this.devices = this.awsMockService.getRegistredDevices();

    // this.awsApiGateway.getDeviceTypes().subscribe((response: DeviceType[]) => {
    //   this.deviceTypes = response;

    //   this.awsApiGateway.getLocations().subscribe((response: Location[]) => {
    //     this.locations = response;

    //     this.awsApiGateway
    //       .getRegistredDevices()
    //       .subscribe((response: DeviceDTO[]) => {
    //         this.devices = response.map(dto => {
    //           const deviceType = this.deviceTypes.find(type => {
    //             return dto.type === type.id;
    //           });
    //           const location = this.locations.find(location => {
    //             return dto.location === location.id;
    //           });
    //           return {
    //             id: dto.id,
    //             type: deviceType,
    //             width: dto.width,
    //             height: dto.height,
    //             battery: dto.battery,
    //             keyboard: dto.keyboard,
    //             location: location
    //           };
    //         });
    //       });
    //   });
    // });
  }
}
