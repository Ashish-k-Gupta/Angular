import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputReuseableComponent } from './input-output-reuseable.component';

describe('InputOutputReuseableComponent', () => {
  let component: InputOutputReuseableComponent;
  let fixture: ComponentFixture<InputOutputReuseableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputOutputReuseableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputOutputReuseableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
