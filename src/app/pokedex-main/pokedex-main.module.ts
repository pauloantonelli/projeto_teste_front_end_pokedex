import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokedexMainComponent } from './pokedex-main.component';

import { MaterialModule } from '../core/assets/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    PokedexMainComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    PokedexMainComponent
  ]
})
export class PokedexMainModule { }
