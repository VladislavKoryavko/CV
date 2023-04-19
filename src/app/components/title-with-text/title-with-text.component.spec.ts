import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleWithTextComponent } from './title-with-text.component';

describe('TitleWithTextComponent', () => {
  let component: TitleWithTextComponent;
  let fixture: ComponentFixture<TitleWithTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleWithTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleWithTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
