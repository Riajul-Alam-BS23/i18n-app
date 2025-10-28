import { Component } from '@angular/core';

@Component({
  selector: 'app-documentation',
  standalone: false,
  templateUrl: './documentation.html',
  styleUrl: './documentation.scss',
})
export class Documentation {
  codeExamples = {
    moduleSetup: `import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { HttpLoaderFactory } from './core/services/translation-loader';

@NgModule({
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    })
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ]
})
export class AppModule { }`,

    translationLoader: `import { HttpClient } from "@angular/common/http";
import { TranslateLoader } from "@ngx-translate/core";
import { Observable } from "rxjs";

export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
  return {
    getTranslation(lang: string): Observable<any> {
      const timestamp = Date.now();
      return http.get(\`./assets/i18n/\${lang}.json?v=\${timestamp}\`);
    }
  };
}`,

    appComponent: `import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export class App implements OnInit {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      this.translate.use(savedLanguage);
    } else {
      const browserLang = this.translate.getBrowserLang();
      const langToUse = browserLang && ['en', 'de', 'bn'].includes(browserLang) 
        ? browserLang 
        : 'en';
      this.translate.use(langToUse);
    }
  }
}`,

    languageSwitcher: `import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

export class LanguageSwitcher implements OnInit, OnDestroy {
  currentLang: string;
  languages = [
    { code: 'en', name: 'English' },
    { code: 'de', name: 'Deutsch' },
    { code: 'bn', name: 'বাংলা' }
  ];
  
  private langChangeSubscription?: Subscription;

  ngOnInit(): void {
    this.langChangeSubscription = this.translate.onLangChange.subscribe((event) => {
      this.currentLang = event.lang;
    });
    
    setTimeout(() => {
      this.currentLang = this.translate.currentLang || 'en';
    }, 0);
  }

  switchLanguage(lang: string): void {
    this.translate.use(lang);
    this.currentLang = lang;
    localStorage.setItem('selectedLanguage', lang);
  }
}`,

    templateUsage: `<!-- Simple translation -->
<h1>{{ 'home.title' | translate }}</h1>

<!-- Nested keys -->
<p>{{ 'home.features.feature1' | translate }}</p>

<!-- In navigation -->
<a routerLink="/home">{{ 'nav.home' | translate }}</a>`,

    translationFile: `{
  "nav": {
    "home": "Home",
    "faq": "FAQ",
    "about": "About"
  },
  "home": {
    "title": "Home Page",
    "features": {
      "feature1": "Multi-language support"
    }
  }
}`
  };

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

