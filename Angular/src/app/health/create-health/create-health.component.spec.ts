import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHealthComponent } from './create-health.component';

describe('CreateHealthComponent', () => {
  let component: CreateHealthComponent;
  let fixture: ComponentFixture<CreateHealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateHealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 
});
