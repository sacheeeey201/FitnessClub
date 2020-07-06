import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTrianerAComponent } from './update-trianer-a.component';

describe('UpdateTrianerAComponent', () => {
  let component: UpdateTrianerAComponent;
  let fixture: ComponentFixture<UpdateTrianerAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTrianerAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTrianerAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
