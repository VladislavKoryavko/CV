import { Component, Input } from '@angular/core';
import { ListWithText } from '../right-panel/right-panel.component';

@Component({
  selector: 'app-list-with-text',
  templateUrl: './list-with-text.component.html',
  styleUrls: ['./list-with-text.component.scss']
})
export class ListWithTextComponent {

  @Input() listWithText: ListWithText = {
    title: '',
    listItems: []
  };
}
