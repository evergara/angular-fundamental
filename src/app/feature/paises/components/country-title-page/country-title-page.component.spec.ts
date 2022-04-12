import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryTitlePageComponent } from './country-title-page.component';

describe('CountryTitlePageComponent', () => {
  let component: CountryTitlePageComponent;
  let fixture: ComponentFixture<CountryTitlePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryTitlePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryTitlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
