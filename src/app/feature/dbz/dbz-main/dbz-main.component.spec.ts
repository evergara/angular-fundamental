import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbzMainComponent } from './dbz-main.component';

describe('DbzMainComponent', () => {
  let component: DbzMainComponent;
  let fixture: ComponentFixture<DbzMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbzMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DbzMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
