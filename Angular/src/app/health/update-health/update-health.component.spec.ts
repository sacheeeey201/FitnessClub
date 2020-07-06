import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHealthComponent } from './update-health.component';

describe('UpdateHealthComponent', () => {
  let component: UpdateHealthComponent;
  let fixture: ComponentFixture<UpdateHealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateHealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 
});
