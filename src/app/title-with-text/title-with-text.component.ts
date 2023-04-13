import { Component, Input } from '@angular/core';
import { TitleWithText } from '../right-panel/right-panel.component';

@Component({
  selector: 'app-title-with-text',
  templateUrl: './title-with-text.component.html',
  styleUrls: ['./title-with-text.component.scss']
})
export class TitleWithTextComponent {

  @Input() titleWithText: TitleWithText = {
    title: '',
    text: ''
  };
}
