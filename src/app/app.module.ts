import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'


import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { SeverElementComponent } from './sever-element/sever-element.component';

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    SeverElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
