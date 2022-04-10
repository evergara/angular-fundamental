import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByCountriesComponent } from './by-countries.component';

describe('ByCountriesComponent', () => {
  let component: ByCountriesComponent;
  let fixture: ComponentFixture<ByCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByCountriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ByCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
