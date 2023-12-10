import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellAPhotoComponent } from './sell-aphoto.component';

describe('SellAPhotoComponent', () => {
  let component: SellAPhotoComponent;
  let fixture: ComponentFixture<SellAPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellAPhotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellAPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
