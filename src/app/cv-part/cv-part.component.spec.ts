import { ComponentFixture, TestBed } from '@angular/core/testing';

import { cvPartComponent } from './cv-part.component';

describe('cvPartComponent', () => {
  let component: cvPartComponent;
  let fixture: ComponentFixture<cvPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ cvPartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(cvPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
