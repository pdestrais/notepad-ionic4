import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RichTextEditorPage } from './rich-text-editor.page';
import { NgxWigModule } from '../ngx-wig/ngx-wig.module';


const routes: Routes = [
  {
    path: '',
    component: RichTextEditorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NgxWigModule
  ],
  declarations: [RichTextEditorPage]
})
export class RichTextEditorPageModule {}
