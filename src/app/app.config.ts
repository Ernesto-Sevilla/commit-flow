import { ApplicationConfig, provideBrowserGlobalErrorListeners, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader, TRANSLATE_HTTP_LOADER_CONFIG } from '@ngx-translate/http-loader';

import { routes } from './app.routes';

export function HttpLoaderFactory(http: HttpClient) {
  return new (TranslateHttpLoader as any)(http, '../assets/i18n', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    {
      provide: TRANSLATE_HTTP_LOADER_CONFIG,
      useValue: {}
    },
    importProvidersFrom(
      TranslateModule.forRoot({
        fallbackLang: 'en', 
        loader: {
          provide: TranslateLoader, 
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        },
      })
    )
  ]
};