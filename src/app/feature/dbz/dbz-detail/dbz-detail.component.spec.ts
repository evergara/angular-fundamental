import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbzDetailComponent } from './dbz-detail.component';

describe('DbzDetailComponent', () => {
  let component: DbzDetailComponent;
  let fixture: ComponentFixture<DbzDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbzDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DbzDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
