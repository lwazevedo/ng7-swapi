import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { RouterModule } from '@angular/router';



import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [BreadcrumbComponent, FooterComponent, HeaderComponent, MenuComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot(),
    RouterModule
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgHttpLoaderModule,
    BreadcrumbComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent
  ]
})
export class CoreModule { }
