import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWithTextComponent } from './list-with-text.component';

describe('ListWithTextComponent', () => {
  let component: ListWithTextComponent;
  let fixture: ComponentFixture<ListWithTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListWithTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListWithTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
