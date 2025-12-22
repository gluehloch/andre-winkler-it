import './polyfills';

import { enableProdMode, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

import { environment } from './environments/environment';

import { AppComponent } from './app/app.component';
import { ImpressumComponent } from './app/impressum/impressum.component';
import { ZitateComponent } from './app/zitate/zitate.component';
import { DownloadComponent } from './app/download/download.component';
import { ProjekteComponent } from './app/projekte/projekte.component';
import { HomeComponent } from './app/home/home.component';
import { CookieConsentSubmit } from './app/app.cookieconsentsubmit.service';

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        provideZoneChangeDetection(),
        importProvidersFrom(BrowserModule, FormsModule),
        CookieConsentSubmit,
        provideHttpClient(withInterceptorsFromDi()),
        provideRouter([
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'projekte',
                component: ProjekteComponent
            },
            {
                path: 'download',
                component: DownloadComponent
            },
            {
                path: 'zitate',
                component: ZitateComponent
            },
            {
                path: 'impressum',
                component: ImpressumComponent
            },
            {
                path: '**',
                component: HomeComponent
            }
        ])
    ]
})
    .catch(err => console.log(err));
