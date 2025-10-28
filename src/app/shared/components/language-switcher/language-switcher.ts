import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-language-switcher',
  standalone: false,
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.scss',
})
export class LanguageSwitcher implements OnInit, OnDestroy {
  currentLang: string;
  languages = [
    { code: 'en', name: 'English' },
    { code: 'de', name: 'Deutsch' },
    { code: 'bn', name: 'বাংলা' }
  ];
  
  private langChangeSubscription?: Subscription;

  constructor(private translate: TranslateService) {
    this.currentLang = this.translate.currentLang || this.translate.defaultLang || 'en';
  }

  ngOnInit(): void {
    // Subscribe to language changes to keep dropdown in sync
    this.langChangeSubscription = this.translate.onLangChange.subscribe((event) => {
      this.currentLang = event.lang;
    });
    
    // Set initial language from TranslateService (after App component loads it)
    setTimeout(() => {
      this.currentLang = this.translate.currentLang || this.translate.defaultLang || 'en';
    }, 0);
  }

  ngOnDestroy(): void {
    // Clean up subscription
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }

  switchLanguage(lang: string): void {
    this.translate.use(lang);
    this.currentLang = lang;
    localStorage.setItem('selectedLanguage', lang);
  }
}

