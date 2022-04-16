import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeI18nselectComponent } from './pipe-i18nselect.component';

describe('PipeI18nselectComponent', () => {
  let component: PipeI18nselectComponent;
  let fixture: ComponentFixture<PipeI18nselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeI18nselectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeI18nselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
