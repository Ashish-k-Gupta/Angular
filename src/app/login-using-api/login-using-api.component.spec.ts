import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUsingAPIComponent } from './login-using-api.component';

describe('LoginUsingAPIComponent', () => {
  let component: LoginUsingAPIComponent;
  let fixture: ComponentFixture<LoginUsingAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginUsingAPIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginUsingAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
