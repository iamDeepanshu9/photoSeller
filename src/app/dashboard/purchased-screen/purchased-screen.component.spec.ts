import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasedScreenComponent } from './purchased-screen.component';

describe('PurchasedScreenComponent', () => {
  let component: PurchasedScreenComponent;
  let fixture: ComponentFixture<PurchasedScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasedScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchasedScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
