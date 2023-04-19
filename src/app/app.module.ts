import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacePanelComponent } from './face-panel/face-panel.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { RightPanelComponent } from './right-panel/right-panel.component';
import { CvPartComponent } from './cv-part/cv-part.component';
import { CvPartItemComponent } from './cv-part-item/cv-part-item.component';
import { CvPartIconComponent } from './cv-part-icon/cv-part-icon.component';
import { TitleWithTextComponent } from './title-with-text/title-with-text.component';
import { ListWithTextComponent } from './list-with-text/list-with-text.component';
import { IconWithHoverTitleComponent } from './icon-with-hover-title/icon-with-hover-title.component';
import { TranslateSelectorComponent } from './translate-selector/translate-selector.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    FacePanelComponent,
    MainContainerComponent,
    RightPanelComponent,
    CvPartComponent,
    CvPartItemComponent,
    CvPartIconComponent,
    TitleWithTextComponent,
    ListWithTextComponent,
    IconWithHoverTitleComponent,
    TranslateSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
