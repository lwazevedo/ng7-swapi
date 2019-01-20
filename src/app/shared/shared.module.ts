import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { HeadDetailComponent } from './components/head-detail/head-detail.component';
import { InfoDetailComponent } from './components/info-detail/info-detail.component';
import { ListDetailComponent } from './components/list-detail/list-detail.component';

@NgModule({
  declarations: [HeadDetailComponent, InfoDetailComponent, ListDetailComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgxPaginationModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    HeadDetailComponent,
    InfoDetailComponent,
    ListDetailComponent
  ]
})
export class SharedModule { }
