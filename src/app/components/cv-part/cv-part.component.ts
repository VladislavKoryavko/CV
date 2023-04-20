import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { ITitledFillableContainer } from '../right-panel/right-panel.component';
import { IEmerging } from "src/app/interfaces/IEmerging";


@Component({
  selector: 'app-cv-part',
  templateUrl: './cv-part.component.html',
  styleUrls: ['./cv-part.component.scss']
})
export class CvPartComponent implements IEmerging {

  constructor(private element: ElementRef) {
    var num = ++CvPartComponent.cvPartNumber;

    if (num === 1) {
      setTimeout(() => { this.isAppeared = true; }, 700);
    }
  }
  
  static cvPartNumber: number = 0;
  isAppeared: boolean = false;

  @Input() cvPart: ITitledFillableContainer = {
    title: '',
    cvPartItems: []
  };

  @HostListener('document:scroll', ['$event'])
  public onViewportScroll() {
    const elementField = this.element.nativeElement.getBoundingClientRect();

    if (elementField.top < window.innerHeight) {
      setTimeout(() => { this.isAppeared = true; }, 500);
    }
  }
}
