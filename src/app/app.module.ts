import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CapitalizePipe } from './capitalize.pipe';
import { StarsPipe } from './stars.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    StarsPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
