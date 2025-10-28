import { Component, OnInit, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('i18n-app');

  constructor(private translate: TranslateService) {
    // Set default language
    this.translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    // Check if a language is saved in localStorage
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      this.translate.use(savedLanguage);
    } else {
      // Use browser language or default to English
      const browserLang = this.translate.getBrowserLang();
      const langToUse = browserLang && ['en', 'de', 'bn'].includes(browserLang) ? browserLang : 'en';
      this.translate.use(langToUse);
    }
  }
}
