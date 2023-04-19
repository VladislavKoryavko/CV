import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { ITitledFillableContainer } from '../right-panel/right-panel.component';


@Component({
  selector: 'app-cv-part',
  templateUrl: './cv-part.component.html',
  styleUrls: ['./cv-part.component.scss']
})
export class CvPartComponent {
  static cvPartNumber: number = 0;
  isVisible = false;

  constructor(private element: ElementRef) {
    var num = ++CvPartComponent.cvPartNumber;

    if (num === 1) {
      setTimeout(() => { this.isVisible = true; }, 700);
    }
  }

  @Input() cvPart: ITitledFillableContainer = {
    title: '',
    cvPartItems: []
  };

  @HostListener('document:scroll', ['$event'])
  public onViewportScroll() {
    const elementField = this.element.nativeElement.getBoundingClientRect();

    if (elementField.top < window.innerHeight) {
      setTimeout(() => { this.isVisible = true; }, 500);
    }
  }
}
