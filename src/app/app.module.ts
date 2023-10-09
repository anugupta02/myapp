import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CountryComponent } from './components/country/country.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountryComponent],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    FormsModule,
    BrowserAnimationsModule
 ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [  ]
})
export class AppModule { }
