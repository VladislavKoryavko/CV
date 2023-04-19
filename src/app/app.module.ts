import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacePanelComponent } from './components/face-panel/face-panel.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { RightPanelComponent } from './components/right-panel/right-panel.component';
import { CvPartComponent } from './components/cv-part/cv-part.component';
import { CvPartItemComponent } from './components/cv-part-item/cv-part-item.component';
import { CvPartIconComponent } from './components/cv-part-icon/cv-part-icon.component';
import { TitleWithTextComponent } from './components/title-with-text/title-with-text.component';
import { ListWithTextComponent } from './components/list-with-text/list-with-text.component';
import { IconWithHoverTitleComponent } from './components/icon-with-hover-title/icon-with-hover-title.component';
import { TranslateSelectorComponent } from './components/translate-selector/translate-selector.component';
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
