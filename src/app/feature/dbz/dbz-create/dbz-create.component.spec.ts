import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbzCreateComponent } from './dbz-create.component';

describe('DbzCreateComponent', () => {
  let component: DbzCreateComponent;
  let fixture: ComponentFixture<DbzCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbzCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DbzCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
