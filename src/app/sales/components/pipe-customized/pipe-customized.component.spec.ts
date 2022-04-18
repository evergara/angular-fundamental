import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeCustomizedComponent } from './pipe-customized.component';

describe('PipeCustomizedComponent', () => {
  let component: PipeCustomizedComponent;
  let fixture: ComponentFixture<PipeCustomizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeCustomizedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeCustomizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
