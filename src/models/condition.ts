import { Location } from "./location";
import { DeviceCharacteristics } from "./device.characteristics";

export interface Condition {
  location: Location;
  characteristics: DeviceCharacteristics;
}
