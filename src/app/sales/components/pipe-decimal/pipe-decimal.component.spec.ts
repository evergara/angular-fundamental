import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeDecimalComponent } from './pipe-decimal.component';

describe('PipeDecimalComponent', () => {
  let component: PipeDecimalComponent;
  let fixture: ComponentFixture<PipeDecimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeDecimalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeDecimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
