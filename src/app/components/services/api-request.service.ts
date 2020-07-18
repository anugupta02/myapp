import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {HaysAPIResponse} from '../../_modal/HaysAPIResponse';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  constructor(private http: HttpClient) {
  }

  getData():Observable<HaysAPIResponse>{
return this.http.get<HaysAPIResponse>('https://moat.hays.com/prjsadmapi/int/ns/gb/en/services/browse/v1/all-service');
  }


}


