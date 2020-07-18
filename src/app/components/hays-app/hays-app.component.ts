import { Component, OnInit } from '@angular/core';
import {HaysAPIResponse} from '../../_modal/HaysAPIResponse';
import {ApiRequestService} from '../services/api-request.service';

@Component({
  selector: 'app-hays-app',
  templateUrl: './hays-app.component.html',
  styleUrls: ['./hays-app.component.scss']
})
export class HaysAppComponent implements OnInit {
apiResponse: HaysAPIResponse;
  constructor(private apiRequest : ApiRequestService) { }

  ngOnInit(){
    this.apiRequest.getData().subscribe(response =>{
      this.apiResponse = response;
    });
  }

}
