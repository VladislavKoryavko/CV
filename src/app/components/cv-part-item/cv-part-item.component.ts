import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { CvPartItem } from '../right-panel/right-panel.component';
import { IEmerging } from 'src/app/interfaces/IEmerging';

@Component({
  selector: 'app-cv-part-item',
  templateUrl: './cv-part-item.component.html',
  styleUrls: ['./cv-part-item.component.scss']
})
export class CvPartItemComponent implements IEmerging {

  constructor(private element: ElementRef) {
    var num = ++CvPartItemComponent.cvPartNumber;

    if (num === 1) {
      setTimeout(() => { this.isAppeared = true; }, 1500);
    }
  }

  static cvPartNumber: number = 0;

  isAppeared: boolean = false;

  @Input() cvPartItem: CvPartItem = {};

  @HostListener('document:scroll', ['$event'])
  public onViewportScroll() {
    const elementField = this.element.nativeElement.getBoundingClientRect();

    if (elementField.top < window.innerHeight) {
      setTimeout(() => { this.isAppeared = true; }, 500);
    }
  }
}
