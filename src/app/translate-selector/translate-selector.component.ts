import { Component } from '@angular/core';

export interface Locale {
  code: string;
  label: string;
}

@Component({
  selector: 'app-translate-selector',
  templateUrl: './translate-selector.component.html',
  styleUrls: ['./translate-selector.component.scss']
})
export class TranslateSelectorComponent {

  localeList: Locale[] = [
    { code: 'en-US', label: 'English' },
    { code: 'ru', label: 'Русский' }

  ]
}
