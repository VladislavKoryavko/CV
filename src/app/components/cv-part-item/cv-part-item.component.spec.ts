import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvPartItemComponent } from './cv-part-item.component';

describe('CvPartItemComponent', () => {
  let component: CvPartItemComponent;
  let fixture: ComponentFixture<CvPartItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvPartItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvPartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
