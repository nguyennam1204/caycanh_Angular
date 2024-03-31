import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThuySinhComponent } from './thuy-sinh.component';

describe('ThuySinhComponent', () => {
  let component: ThuySinhComponent;
  let fixture: ComponentFixture<ThuySinhComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThuySinhComponent]
    });
    fixture = TestBed.createComponent(ThuySinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
