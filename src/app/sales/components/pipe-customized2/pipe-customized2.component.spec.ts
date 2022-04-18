import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeCustomized2Component } from './pipe-customized2.component';

describe('PipeCustomized2Component', () => {
  let component: PipeCustomized2Component;
  let fixture: ComponentFixture<PipeCustomized2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeCustomized2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeCustomized2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
