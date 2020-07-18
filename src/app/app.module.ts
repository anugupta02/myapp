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
import {HeaderComponent} from "./components/header/header.component";
import {DataListComponent} from "./components/data-list/data-list.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {HaysAppComponent} from "./components/hays-app/hays-app.component";
import {DetailComponent} from "./components/detail/detail.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    TestPageComponent,
    IconsComponent,
    DashboardComponent,
    DataListComponent,
    DetailComponent,
    HeaderComponent,
    HaysAppComponent,
    NotFoundComponent

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
