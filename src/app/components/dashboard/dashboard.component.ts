import { Component, OnInit } from '@angular/core';
import {Hero} from '../../_modal/hero'
import {LocalDataService} from '../services/local-data.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  heroList: Hero[];
  selectedHero: Hero;
  constructor(private localDataService: LocalDataService) {
    this.heroList = [];
  }

  ngOnInit(){
    this.localDataService.getHeroList().subscribe(data=>{
      this.heroList = data;
    });
    this.selectedHero = this.heroList[0];
  }


onDataRecev(data){
console.log('data from chill',data);
}


}
