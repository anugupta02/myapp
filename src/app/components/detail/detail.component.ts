import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../../_modal/hero';
import {LocalDataService} from '../services/local-data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input('hero') hero : Hero;
  constructor(private localDataService: LocalDataService) { }

  ngOnInit() {
    this.localDataService.selectdHero.subscribe(d => {
      this.hero = d;
    });
  }

}
