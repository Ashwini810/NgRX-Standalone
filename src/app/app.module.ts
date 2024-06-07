import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './Feature/Standalone-NgRx/counter/counter.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
