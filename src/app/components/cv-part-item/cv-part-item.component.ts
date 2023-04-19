import { Component, Input } from '@angular/core';
import { CvPartItem } from '../right-panel/right-panel.component';

@Component({
  selector: 'app-cv-part-item',
  templateUrl: './cv-part-item.component.html',
  styleUrls: ['./cv-part-item.component.scss']
})
export class CvPartItemComponent {

  @Input() cvPartItem: CvPartItem = {};
}
