import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipePercentComponent } from './pipe-percent.component';

describe('PipePercentComponent', () => {
  let component: PipePercentComponent;
  let fixture: ComponentFixture<PipePercentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipePercentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipePercentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
