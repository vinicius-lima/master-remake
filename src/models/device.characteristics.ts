import { DeviceType } from "./device.type";

export interface DeviceCharacteristics {
  id?: number;
  type?: DeviceType;
  width?: number;
  height?: number;
  battery?: boolean;
  keyboard?: boolean;
}
