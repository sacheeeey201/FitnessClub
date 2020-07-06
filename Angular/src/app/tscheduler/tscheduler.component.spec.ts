import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TschedulerComponent } from './tscheduler.component';

describe('TschedulerComponent', () => {
  let component: TschedulerComponent;
  let fixture: ComponentFixture<TschedulerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TschedulerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TschedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
