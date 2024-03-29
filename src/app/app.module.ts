import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './navbar/navbar.component';

import { AppComponent } from './app.component';
import { DownloadComponent } from './download/download.component';
import { HomeComponent } from './home/home.component';
import { ProjekteComponent } from './projekte/projekte.component';
import { ZitateComponent } from './zitate/zitate.component';
import { ImpressumComponent } from './impressum/impressum.component';

import { NgcCookieConsentModule, NgcCookieConsentConfig } from 'ngx-cookieconsent';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { CookieConsentSubmit } from './app.cookieconsentsubmit.service';
import { FollowTwitterComponent } from './twitter/FollowTwitterComponent';

const cookieConfig: NgcCookieConsentConfig = {
    cookie: {
        domain: 'andre-winkler.de'
    },
    position: 'bottom-right',
    palette: {
        popup: {
            'background': '#2b482a',
            'text': '#ffffff',
            'link': '#ffffff'
        },
        button: {
            'background': '#bfc418',
            'text': '#000000',
            'border': 'transparent'
        }
    },
    theme: 'edgeless',
    type: 'opt-out',
    content: {
        message: 'Diese Webseite verwendet Cookies.',
        dismiss: 'Verstanden',
        deny: 'Verweigern',
        allow: 'Erlauben',
        link: 'Mehr Infos',
        href: 'http://www.andre-winkler.de/impressum',
        target: '',
        policy: 'Cookie Policy'
    }
};

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, 'https://cookie.gluehloch.de/assets/', '.json');
}

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        NgcCookieConsentModule.forRoot(cookieConfig),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        RouterModule.forRoot([
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
], { })
    ],
    exports: [
        TranslateModule
    ],
    declarations: [
        NavbarComponent,
        AppComponent,
        HomeComponent,
        ProjekteComponent,
        DownloadComponent,
        ZitateComponent,
        ImpressumComponent,
        FollowTwitterComponent
    ],
    providers: [
        CookieConsentSubmit,
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
