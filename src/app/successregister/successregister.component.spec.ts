import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessregisterComponent } from './successregister.component';

describe('SuccessregisterComponent', () => {
  let component: SuccessregisterComponent;
  let fixture: ComponentFixture<SuccessregisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccessregisterComponent]
    });
    fixture = TestBed.createComponent(SuccessregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
