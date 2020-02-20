import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { LabinpComponent } from './labinp/labinp.component';
import { ComholderComponent } from './comholder/comholder.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    LabinpComponent,
    ComholderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
