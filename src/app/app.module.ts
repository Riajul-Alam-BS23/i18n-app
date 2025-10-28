import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { AppRoutingModule } from './app-routing.module';
import { App } from './app';
import { Home } from './pages/home/home';
import { Faq } from './pages/faq/faq';
import { About } from './pages/about/about';
import { LanguageSwitcher } from './shared/components/language-switcher';
import { HttpLoaderFactory } from './core/services/translation-loader';

@NgModule({
  declarations: [
    App,
    Home,
    Faq,
    About,
    LanguageSwitcher
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    })
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
