import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoApComponent } from './components/logo-ap/logo-ap.component';
import { SocialComponent } from './components/social/social.component';
import { BanerComponent } from './components/baner/baner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoApComponent,
    SocialComponent,
    BanerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    AppComponent, HeaderComponent, LogoApComponent, SocialComponent, 
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
