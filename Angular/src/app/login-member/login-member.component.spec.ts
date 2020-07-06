import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginMemberComponent } from './login-member.component';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';


describe('LoginMemberComponent', () => {
  let component: LoginMemberComponent;
  let fixture: ComponentFixture<LoginMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginMemberComponent ],
      imports: [FormsModule,FormGroup,FormControl]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});

it('[Username-check] - should check members username is invalid', ()=>{
  let username=LoginMemberComponent.memberLogin.controls['username']
  expect(username.valid).toBeFalsy();
  expect(username.errors['required']).toBeTruthy();
  username.setValue('a');
  expect(username.errors['username required']).toBeTruthy;

});