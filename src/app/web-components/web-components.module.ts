import { APP_INITIALIZER, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { appInitialize } from './app-initialize';

import { MarkdownToHTMLComponent } from './mdtohtml/mdtohtml.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MarkdownToHTMLComponent
  ],
  exports: [
    MarkdownToHTMLComponent
  ],
  entryComponents: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WebComponentsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: WebComponentsModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: appInitialize,
          multi: true
        }
      ]
    };
  }
}
