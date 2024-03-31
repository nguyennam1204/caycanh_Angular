import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenDaComponent } from './sen-da.component';

describe('SenDaComponent', () => {
  let component: SenDaComponent;
  let fixture: ComponentFixture<SenDaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SenDaComponent]
    });
    fixture = TestBed.createComponent(SenDaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
