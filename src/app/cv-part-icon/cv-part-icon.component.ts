import { Component, Input } from '@angular/core';
import { CvPartIcon } from '../right-panel/right-panel.component';

@Component({
  selector: 'app-cv-part-icon',
  templateUrl: './cv-part-icon.component.html',
  styleUrls: ['./cv-part-icon.component.scss']
})
export class CvPartIconComponent {

  @Input() cvPartIcon: CvPartIcon = {
    title: '',
    iconSrc: ''
  };
}
