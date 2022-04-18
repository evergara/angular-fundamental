import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeCustomizedWithParamsComponent } from './pipe-customized-with-params.component';

describe('PipeCustomizedWithParamsComponent', () => {
  let component: PipeCustomizedWithParamsComponent;
  let fixture: ComponentFixture<PipeCustomizedWithParamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeCustomizedWithParamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeCustomizedWithParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
