// import "core-js"
// import "zone.js/dist/zone";
// import "zone.js/dist/long-stack-trace-zone";
// import "zone.js/dist/proxy";
// import "zone.js/dist/sync-test";
// import "zone.js/dist/jasmine-patch";
// import "zone.js/dist/async-test";
// import "zone.js/dist/fake-async-test";
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
