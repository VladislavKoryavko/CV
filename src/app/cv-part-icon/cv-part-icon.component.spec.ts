import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvPartIconComponent } from './cv-part-icon.component';

describe('CvPartIconComponent', () => {
  let component: CvPartIconComponent;
  let fixture: ComponentFixture<CvPartIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvPartIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvPartIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
