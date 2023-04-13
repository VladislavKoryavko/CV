import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconWithHoverTitleComponent } from './icon-with-hover-title.component';

describe('IconWithHoverTitleComponent', () => {
  let component: IconWithHoverTitleComponent;
  let fixture: ComponentFixture<IconWithHoverTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconWithHoverTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconWithHoverTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
