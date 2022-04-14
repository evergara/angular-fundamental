import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoCommonComponent } from './no-common.component';

describe('NoCommonComponent', () => {
  let component: NoCommonComponent;
  let fixture: ComponentFixture<NoCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoCommonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
