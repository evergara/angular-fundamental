import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeBasicComponent } from './pipe-basic.component';

describe('PipeBasicComponent', () => {
  let component: PipeBasicComponent;
  let fixture: ComponentFixture<PipeBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
