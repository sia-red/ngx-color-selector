import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgxColorSelectorComponent } from './components/color-selector/color-selector.component';
import { NgxColorSelectorPaletteComponent } from './components/color-selector-palette/color-selector-palette.component';
import { NgxColorSelectorService } from './services/color-selector.service';

export * from './components/color-selector/color-selector.component';
export * from './components/color-selector-palette/color-selector-palette.component';
export * from './services/color-selector.service';

export * from './interfaces/color';
export * from './interfaces/palette-direction';
export * from './interfaces/palette-position';
export * from './interfaces/swatch-size';

export * from './color-palettes/flat-colors';
export * from './color-palettes/material-colors';

export * from './color-selector-config';

@NgModule({
  declarations: [NgxColorSelectorComponent, NgxColorSelectorPaletteComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NgxColorSelectorComponent,
    NgxColorSelectorPaletteComponent
  ],
  providers: [NgxColorSelectorService]
})
export class NgxColorSelectorModule { }
