import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CayCanhComponent } from './cay-canh.component';

describe('CayCanhComponent', () => {
  let component: CayCanhComponent;
  let fixture: ComponentFixture<CayCanhComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CayCanhComponent]
    });
    fixture = TestBed.createComponent(CayCanhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
