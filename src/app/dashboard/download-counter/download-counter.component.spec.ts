import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadCounterComponent } from './download-counter.component';

describe('DownloadCounterComponent', () => {
  let component: DownloadCounterComponent;
  let fixture: ComponentFixture<DownloadCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadCounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
