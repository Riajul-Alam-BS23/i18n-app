# Quick Setup Guide - Angular i18n with ngx-translate v17

This guide provides quick instructions for setting up the internationalization (i18n) application.

## ✅ Prerequisites

- Node.js (v18 or higher)
- Angular CLI (v20 or higher)
- npm or yarn

## 🚀 Installation & Running

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm start
```

The application will be available at `http://localhost:4200/`

### 3. Build for Production

```bash
npm run build
```

## 📦 Key Dependencies

```json
{
  "@ngx-translate/core": "^17.0.0",
  "@ngx-translate/http-loader": "^17.0.0",
  "@angular/core": "^20.3.0"
}
```

## 🔧 Configuration (ngx-translate v17)

### App Module Setup

The application uses the new **v17 API** for configuring ngx-translate:

```typescript
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  imports: [
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: provideTranslateHttpLoader({
        prefix: './assets/i18n/',
        suffix: '.json'
      })
    })
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ]
})
export class AppModule { }
```

**Key Changes in v17:**
- ❌ Old: `HttpLoaderFactory` with `new TranslateHttpLoader(http, prefix, suffix)`
- ✅ New: `provideTranslateHttpLoader({ prefix, suffix })`

### Translation Service Initialization

```typescript
import { TranslateService } from '@ngx-translate/core';

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
```

## 📁 Project Structure

```
src/
├── app/
│   ├── pages/
│   │   ├── home/              # Home page
│   │   ├── faq/               # FAQ page
│   │   └── about/             # About page
│   ├── shared/
│   │   └── components/
│   │       └── language-switcher/   # Language selector component
│   └── app.module.ts          # Main module with i18n config
└── assets/
    └── i18n/
        ├── en.json            # English translations
        ├── de.json            # German translations
        └── bn.json            # Bengali translations
```

## 🌍 Supported Languages

| Code | Language | Native Name |
|------|----------|-------------|
| en   | English  | English     |
| de   | German   | Deutsch     |
| bn   | Bengali  | বাংলা       |

## 🎯 Using Translations

### In Templates

```html
<!-- Simple translation -->
<h1>{{ 'home.title' | translate }}</h1>

<!-- Nested keys -->
<p>{{ 'home.features.feature1' | translate }}</p>

<!-- With parameters (if configured) -->
<p>{{ 'welcome.message' | translate: {name: userName} }}</p>
```

### In Components

```typescript
constructor(private translate: TranslateService) {}

getTranslation() {
  this.translate.get('home.title').subscribe((text: string) => {
    console.log(text);
  });
}

switchLanguage(lang: string) {
  this.translate.use(lang);
}
```

## 🔍 Troubleshooting

### Issue: "Cannot find module '@ngx-translate/http-loader'"

**Solution:**
```bash
npm install @ngx-translate/http-loader@17.0.0
```

### Issue: Translation keys showing instead of text

**Checklist:**
- ✅ Translation file exists in `src/assets/i18n/`
- ✅ JSON syntax is valid (use `npm run lint:json` if available)
- ✅ Key exists in translation file
- ✅ TranslateService is initialized

### Issue: Language doesn't change

**Solution:**
- Check browser console for HTTP errors
- Verify `TranslateService.use(lang)` is called
- Clear browser cache and localStorage

### Issue: Build errors with TranslateHttpLoader

**Solution:**
If you're getting constructor errors, make sure you're using the v17 API:

```typescript
// ❌ Don't use (old API)
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

// ✅ Use (new v17 API)
TranslateModule.forRoot({
  loader: provideTranslateHttpLoader({
    prefix: './assets/i18n/',
    suffix: '.json'
  })
})
```

## 📖 Full Documentation

For comprehensive documentation, see:
- **[I18N_DOCUMENTATION.md](./I18N_DOCUMENTATION.md)** - Complete implementation guide
- **[README.md](./README.md)** - Project overview

## 🧪 Testing

```bash
# Run unit tests
npm test

# Run linting
npm run lint

# Check TypeScript compilation
npx tsc --noEmit
```

## 🎨 Features Demonstrated

- ✅ Multi-language support (3 languages)
- ✅ Language switcher component
- ✅ Browser language detection
- ✅ localStorage persistence
- ✅ Lazy loading of translation files
- ✅ Fully translated pages (Home, FAQ, About)
- ✅ Responsive design
- ✅ Modern UI with gradients

## 📝 Adding a New Language

1. Create translation file: `src/assets/i18n/fr.json`

2. Add language to switcher:
```typescript
languages = [
  { code: 'en', name: 'English' },
  { code: 'de', name: 'Deutsch' },
  { code: 'bn', name: 'বাংলা' },
  { code: 'fr', name: 'Français' }  // New
];
```

3. Update language detection in `app.ts`:
```typescript
const langToUse = browserLang && ['en', 'de', 'bn', 'fr'].includes(browserLang)
  ? browserLang 
  : 'en';
```

## 🤝 Need Help?

- Check the [I18N_DOCUMENTATION.md](./I18N_DOCUMENTATION.md) for detailed workflows
- Review Angular documentation: https://angular.io/docs
- ngx-translate documentation: https://github.com/ngx-translate/core

## ⚡ Quick Commands

```bash
# Install and run
npm install && npm start

# Build production
npm run build

# Test
npm test

# Lint
npm run lint
```

---

Happy coding! 🚀

