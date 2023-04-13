import { Component, Input} from '@angular/core';
import { ITitledFillableContainer } from '../right-panel/right-panel.component';


@Component({
  selector: 'app-cv-part',
  templateUrl: './cv-part.component.html',
  styleUrls: ['./cv-part.component.scss']
})
export class cvPartComponent {

  @Input() cvPart: ITitledFillableContainer = {
    title: '',
    cvPartItems: []
  };
}
