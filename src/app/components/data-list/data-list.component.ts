import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Hero} from '../../_modal/hero'
import {LocalDataService} from '../services/local-data.service';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit {

  @Input('heroList') heroList: Hero[];
@Output('selectedHero') selectedHero = new EventEmitter<Hero>()
  constructor(private localDataService: LocalDataService) { }

  ngOnInit(){ }

  onSelectHero(hero: Hero): void {
  this.selectedHero.emit(hero);
  this.localDataService.selectdHero.next(hero);
  }
}
