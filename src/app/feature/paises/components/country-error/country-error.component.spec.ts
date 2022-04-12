import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryErrorComponent } from './country-error.component';

describe('CountryErrorComponent', () => {
  let component: CountryErrorComponent;
  let fixture: ComponentFixture<CountryErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
