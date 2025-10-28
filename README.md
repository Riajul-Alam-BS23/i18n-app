# Angular i18n Application

A fully functional Angular application demonstrating internationalization (i18n) using ngx-translate with support for English, German, and Bengali languages.

## 🌍 Features

- ✅ Multi-language support (English, German, Bengali)
- ✅ Dynamic language switching without page reload
- ✅ Persistent language selection using localStorage
- ✅ Browser language detection
- ✅ Modern, responsive UI with gradient styling
- ✅ Three fully translated pages: Home, FAQ, About
- ✅ Custom language switcher component

## 🚀 Quick Start

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start
```

Navigate to `http://localhost:4200/`

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
i18n-app/
├── src/
│   ├── app/
│   │   ├── pages/              # Page components (Home, FAQ, About)
│   │   ├── shared/             # Shared components (Language Switcher)
│   │   └── core/               # Core services
│   └── assets/
│       └── i18n/               # Translation files
│           ├── en.json         # English
│           ├── de.json         # German
│           └── bn.json         # Bengali
└── I18N_DOCUMENTATION.md       # Detailed documentation
```

## 📖 Documentation

For comprehensive documentation on the internationalization implementation, workflow, and best practices, please refer to:

**[I18N_DOCUMENTATION.md](./I18N_DOCUMENTATION.md)**

This documentation covers:
- Complete setup and installation guide
- Detailed implementation workflow
- Component architecture
- Translation management
- Language switching mechanism
- Best practices
- Testing strategies
- Troubleshooting guide

## 🔧 Technology Stack

- **Angular** v20.3.0 - Frontend framework
- **ngx-translate/core** v17.0.0 - Translation library
- **ngx-translate/http-loader** v17.0.0 - HTTP loader for translations
- **TypeScript** v5.9.2 - Programming language
- **SCSS** - Styling

## 🌐 Supported Languages

| Language | Code | Status |
|----------|------|--------|
| English  | en   | ✅     |
| German   | de   | ✅     |
| Bengali  | bn   | ✅     |

## 📄 Pages

### Home
- Welcome section with hero banner
- Feature highlights
- Call-to-action buttons

### FAQ
- Frequently asked questions
- Question and answer format
- Fully translated content

### About
- Application information
- Mission statement
- Technology stack overview
- Contact section

## 🎨 UI Features

- Modern gradient design
- Responsive layout (mobile-friendly)
- Smooth transitions
- Accessible navigation
- Consistent styling across pages

## 📝 Adding a New Language

1. Create a new translation file in `src/assets/i18n/` (e.g., `fr.json`)
2. Copy the structure from `en.json` and translate all values
3. Update the language switcher in `src/app/shared/components/language-switcher/language-switcher.ts`
4. Add the language code to the supported languages list in `app.ts`

See detailed instructions in [I18N_DOCUMENTATION.md](./I18N_DOCUMENTATION.md#adding-a-new-language)

## 🧪 Testing

```bash
# Run unit tests
npm test

# Run e2e tests
npm run e2e
```

## 🐛 Troubleshooting

### Translation not showing?
- Check if the translation key exists in all language files
- Verify JSON syntax is valid
- Clear browser cache and reload

### Language not switching?
- Open browser console for errors
- Verify translation files are loaded correctly
- Check localStorage for saved language preference

For more troubleshooting tips, see [I18N_DOCUMENTATION.md](./I18N_DOCUMENTATION.md#troubleshooting)

## 📦 Dependencies

```json
{
  "@ngx-translate/core": "^17.0.0",
  "@ngx-translate/http-loader": "^17.0.0",
  "@angular/common": "^20.3.0",
  "@angular/core": "^20.3.0",
  "@angular/forms": "^20.3.0",
  "@angular/router": "^20.3.0"
}
```

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open source and available under the MIT License.

## 📚 Learn More

- [Angular Documentation](https://angular.io/docs)
- [ngx-translate Documentation](https://github.com/ngx-translate/core)
- [i18n Best Practices](https://angular.io/guide/i18n)

---

**Enjoy building multilingual applications! 🌍**
