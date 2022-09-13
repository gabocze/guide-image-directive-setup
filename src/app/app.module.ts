import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgOptimizedImage, provideImgixLoader } from '@angular/common';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage,
  ],
  providers: [
    provideImgixLoader('https://firstclass.imgix.net/')
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
