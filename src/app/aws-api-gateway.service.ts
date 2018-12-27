import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { DeviceType } from "src/models/device.type";
import { Location } from "src/models/location";
import { DeviceDTO } from "src/models/device.dto";

@Injectable({
  providedIn: "root"
})
export class AwsApiGatewayService {
  apiConfig = {
    baseUrl:
      "https://<some_aws_id>.execute-api.sa-east-1.amazonaws.com/dev/master-remake",
    endpoints: {
      types: "/deviceTypes",
      locations: "/locations",
      devices: "/devices"
    }
  };

  constructor(private http: HttpClient) {}

  getDeviceTypes(): Observable<DeviceType[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Access-Control-Allow-Headers": "*"
      })
    };
    return this.http.get<DeviceType[]>(
      `${this.apiConfig.baseUrl}${this.apiConfig.endpoints.types}`,
      httpOptions
    );
  }

  getLocations(): Observable<Location[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Access-Control-Allow-Headers": "*"
      })
    };
    return this.http.get<Location[]>(
      `${this.apiConfig.baseUrl}${this.apiConfig.endpoints.locations}`,
      httpOptions
    );
  }

  getRegistredDevices(): Observable<DeviceDTO[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Access-Control-Allow-Headers": "*"
      })
    };
    return this.http.get<DeviceDTO[]>(
      `${this.apiConfig.baseUrl}${this.apiConfig.endpoints.devices}`,
      httpOptions
    );
  }

  addDevice(device): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*"
      })
    };
    return this.http.post<any>(
      `${this.apiConfig.baseUrl}`,
      device,
      httpOptions
    );
  }
}
