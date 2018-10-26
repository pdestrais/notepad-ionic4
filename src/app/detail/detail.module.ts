import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetailPage } from './detail.page';
import { NgxWigModule } from '../ngx-wig/ngx-wig.module';
import { MdtohtmlPageModule } from '../mdtohtml/mdtohtml.module';

const routes: Routes = [
  {
    path: '',
    component: DetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NgxWigModule,
    MdtohtmlPageModule
  ],
  declarations: [DetailPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DetailPageModule {}
