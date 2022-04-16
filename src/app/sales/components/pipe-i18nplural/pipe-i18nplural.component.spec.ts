import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeI18npluralComponent } from './pipe-i18nplural.component';

describe('PipeI18npluralComponent', () => {
  let component: PipeI18npluralComponent;
  let fixture: ComponentFixture<PipeI18npluralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeI18npluralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeI18npluralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
