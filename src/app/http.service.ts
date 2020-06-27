import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  myMethod() {
    return console.log('Hey Iam Anu, whats up everyone!');
  }
  getBeer() {
    return this.http.get('https://api.openbrewerydb.org/breweries')
  }
}
