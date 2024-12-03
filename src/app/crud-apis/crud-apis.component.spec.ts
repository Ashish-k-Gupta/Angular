import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudAPISComponent } from './crud-apis.component';

describe('CrudAPISComponent', () => {
  let component: CrudAPISComponent;
  let fixture: ComponentFixture<CrudAPISComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudAPISComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudAPISComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
