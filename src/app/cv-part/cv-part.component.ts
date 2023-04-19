import { Component, HostListener, Input } from '@angular/core';
import { ITitledFillableContainer } from '../right-panel/right-panel.component';


@Component({
  selector: 'app-cv-part',
  templateUrl: './cv-part.component.html',
  styleUrls: ['./cv-part.component.scss']
})
export class CvPartComponent {
  static cvPartNumber: number = 0;
  readonly id: string;
  isVisible = false;

  constructor() {
    var num = ++CvPartComponent.cvPartNumber;
    this.id = this.constructor.name + "-" + num;

    if (num === 1) {
      setTimeout(() => { this.isVisible = true; }, 500);
    }
  }

  @Input() cvPart: ITitledFillableContainer = {
    title: '',
    cvPartItems: []
  };

  @HostListener('document:scroll', ['$event'])
  public onViewportScroll() {
    const windowHeight = window.innerHeight;
    const bounding = document.getElementById(this.id)?.getBoundingClientRect();

    if (bounding) {
      if (bounding.top < windowHeight) {
        setTimeout(() => { this.isVisible = true; }, 500);
      }
    }
  }
}
