import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './core/assets/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PokedexMainModule } from './pokedex-main/pokedex-main.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    PokedexMainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
