import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxWigComponent } from './ngx-wig.component';
import { NgxWigToolbarService } from '../services/ngx-wig-toolbar.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export * from './ngx-wig.component';
export * from '../services/ngx-wig-toolbar.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    NgxWigComponent,
  ],
  exports: [
    NgxWigComponent,
  ],
  providers: [ NgxWigToolbarService ]
})
export class NgxWigModule {
}
