import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeAddComponent } from './heroe-add.component';

describe('HeroeAddComponent', () => {
  let component: HeroeAddComponent;
  let fixture: ComponentFixture<HeroeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroeAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
