import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateSelectorComponent } from './translate-selector.component';

describe('TranslateSelectorComponent', () => {
  let component: TranslateSelectorComponent;
  let fixture: ComponentFixture<TranslateSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranslateSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranslateSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
