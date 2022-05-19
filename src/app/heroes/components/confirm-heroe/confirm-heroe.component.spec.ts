import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmHeroeComponent } from './confirm-heroe.component';

describe('ConfirmHeroeComponent', () => {
  let component: ConfirmHeroeComponent;
  let fixture: ComponentFixture<ConfirmHeroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmHeroeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
