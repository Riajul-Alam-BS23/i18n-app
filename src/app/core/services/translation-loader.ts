import { HttpClient } from "@angular/common/http";
import { TranslateLoader } from "@ngx-translate/core";
import { Observable } from "rxjs";

export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
    return {
        getTranslation(lang: string): Observable<any> {
            const timestamp = Date.now();
            return http.get(`./assets/i18n/${lang}.json?v=${timestamp}`);
        }
    };
}

