import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DeviceManagementComponent } from './device-management/device-management.component';
import { PreferenceManagementComponent } from './preference-management/preference-management.component';
import { DevicesComponent } from './devices/devices.component';
import { DeviceFormComponent } from './device-form/device-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DeviceManagementComponent,
    PreferenceManagementComponent,
    DevicesComponent,
    DeviceFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
