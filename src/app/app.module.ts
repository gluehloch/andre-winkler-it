import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';

import { AppComponent } from './app.component';
import { DownloadComponent } from './download/download.component';
import { HomeComponent } from './home/home.component';
import { ProjekteComponent } from './projekte/projekte.component';
import { ZitateComponent } from './zitate/zitate.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
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
            }
        ])
    ],
    declarations: [
        NavbarComponent,
        AppComponent,
        HomeComponent,
        ProjekteComponent,
        DownloadComponent,
        ZitateComponent
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
