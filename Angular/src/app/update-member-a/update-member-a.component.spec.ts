import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMemberAComponent } from './update-member-a.component';

describe('UpdateMemberAComponent', () => {
  let component: UpdateMemberAComponent;
  let fixture: ComponentFixture<UpdateMemberAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMemberAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMemberAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
