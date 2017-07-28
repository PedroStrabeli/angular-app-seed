import './polyfills';
import { platformBrowser } from '@angular/platform-browser';

// This file is created on the fly, on prod compilation. it's a temp file that will be erased, but will exist.
import { AppModuleNgFactory } from './app.module.ngfactory';
import { enableProdMode } from '@angular/core';

enableProdMode();
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);