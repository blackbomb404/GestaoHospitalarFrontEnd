import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialtyDialogComponent } from './specialty-dialog.component';

describe('SpecialtyDialogComponent', () => {
  let component: SpecialtyDialogComponent;
  let fixture: ComponentFixture<SpecialtyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialtyDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialtyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
