import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTrainerComponent } from './login-trainer.component';

describe('LoginTrainerComponent', () => {
  let component: LoginTrainerComponent;
  let fixture: ComponentFixture<LoginTrainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginTrainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 
});
