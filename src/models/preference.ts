import { Condition } from "./condition";

export interface Preference {
  application: string;
  conditions: Condition[];
}
