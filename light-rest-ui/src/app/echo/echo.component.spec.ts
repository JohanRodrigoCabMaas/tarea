import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchoComponent } from './echo.component';

describe('EchoComponent', () => {
  let component: EchoComponent;
  let fixture: ComponentFixture<EchoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EchoComponent]
    });
    fixture = TestBed.createComponent(EchoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
