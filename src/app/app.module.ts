import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';
import { DbzService } from './dbz/services/dbz.service';
import { HeoresModule } from './heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContadorModule,
    HeoresModule,
    DbzModule
  ],
  providers: [
    DbzService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
