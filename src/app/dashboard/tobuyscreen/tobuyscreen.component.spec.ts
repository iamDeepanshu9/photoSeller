import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TobuyscreenComponent } from './tobuyscreen.component';

describe('TobuyscreenComponent', () => {
  let component: TobuyscreenComponent;
  let fixture: ComponentFixture<TobuyscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TobuyscreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TobuyscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
