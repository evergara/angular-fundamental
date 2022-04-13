import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByRegionBlocComponent } from './by-region-bloc.component';

describe('ByRegionBlocComponent', () => {
  let component: ByRegionBlocComponent;
  let fixture: ComponentFixture<ByRegionBlocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByRegionBlocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ByRegionBlocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
