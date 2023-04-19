import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacePanelComponent } from './face-panel.component';

describe('FacePanelComponent', () => {
  let component: FacePanelComponent;
  let fixture: ComponentFixture<FacePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacePanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
