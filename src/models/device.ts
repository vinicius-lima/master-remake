import { DeviceType } from "./device.type";
import { Location } from "./location";

export interface Device {
  id: number;
  type: DeviceType;
  width: number;
  height: number;
  battery: boolean;
  keyboard: boolean;
  location: Location;
}
