import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlankTemplateComponent } from './layouts/blank/blank-template/blank-template.component';
import { FullTemplateComponent } from './layouts/full/full-template/full-template.component';

@NgModule({
  declarations: [
    AppComponent,
    BlankTemplateComponent,
    FullTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
