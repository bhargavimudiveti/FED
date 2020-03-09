import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SafePipeModule } from 'safe-pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { InspirationComponent } from './inspiration/inspiration.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderModule } from 'angular-image-slider';
import { EpisodesComponent } from './episodes/episodes.component';
import { FormsModule } from '@angular/forms';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InspirationComponent,
    GalleryComponent,
    EpisodesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SafePipeModule,
    HttpClientModule,
    BrowserAnimationsModule,
     SliderModule,
     FormsModule,
     TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
 export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
