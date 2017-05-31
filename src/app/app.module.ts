import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';

import { AppComponent } from './app.component';
import { routes } from './app.routing';
import { ServerModule } from './serverModule/server.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ServerModule,
    routes,
    SlimLoadingBarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
