import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlankTemplateComponent } from './layouts/blank-template/blank-template.component';





@NgModule({
  declarations: [
    AppComponent,
    BlankTemplateComponent
  ],
  imports: [
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
