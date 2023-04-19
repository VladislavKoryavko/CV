import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvPartComponent } from './cv-part.component';

describe('cvPartComponent', () => {
  let component: CvPartComponent;
  let fixture: ComponentFixture<CvPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvPartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
