import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import {HttpClientModule} from '@angular/common/http';
import {TestPageComponent} from './test-page';
import {ModalModule} from './_modal';
import {FormsModule} from "@angular/forms";
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBtn, MDBIcon } from "mdbreact";
import {MatTooltipModule} from "@angular/material/tooltip";
import {IconsComponent} from "./icons/icons.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    TestPageComponent,
    IconsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule,
    FormsModule,
    MatIconModule,
    MatTooltipModule,
    BrowserAnimationsModule,


  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
