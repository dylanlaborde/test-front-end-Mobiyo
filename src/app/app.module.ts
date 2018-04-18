import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FilmComponent } from './film/film.component';
import { FilmDetailsComponent } from './film-details/film-details.component';


@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    FilmDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
