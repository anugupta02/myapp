import { Injectable } from '@angular/core';
import {Hero} from '../../_modal/hero'
import {BehaviorSubject, Observable,of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LocalDataService {
private heroList = new Observable<Hero[]>();

// @ts-ignore
  selectdHero = new BehaviorSubject<Hero>();


  getHeroList(): Observable<Hero[]>{
return of(this.loadData());
  }

  loadData(): Hero[]{
    const heroArry = [];
    heroArry.push({id: 1,name: 'Java'});
    heroArry.push({id: 1,name: 'Angular 8'});
    heroArry.push({id: 1,name: 'React'});
    heroArry.push({id: 1,name: 'Vue'});
    heroArry.push({id: 1,name: 'Python'});
    heroArry.push({id: 1,name: '.Net'});
    return heroArry;
  }


}
