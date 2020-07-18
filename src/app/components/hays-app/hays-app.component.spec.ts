import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaysAppComponent } from './hays-app.component';

describe('HaysAppComponent', () => {
  let component: HaysAppComponent;
  let fixture: ComponentFixture<HaysAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaysAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaysAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
