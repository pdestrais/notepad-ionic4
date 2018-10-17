import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

//import { defineCustomElements } from 'markdowntohtml-component/dist/loader';
//import { defineCustomElements as DCE1 } from 'c-coffee-icon';

if (environment.production) {
  enableProdMode();
}

//const win = window as any;
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
/* if (typeof win !== 'undefined') {
  defineCustomElements(win);
  DCE1(win);
}
 */