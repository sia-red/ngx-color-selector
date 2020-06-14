import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, HostBinding } from '@angular/core';
import { IColor } from '../../interfaces/color';
import { PaletteDirection } from '../../interfaces/palette-direction';
import { NgxColorSelectorService } from '../../services/color-selector.service';
import { IColorSelectorConfig } from '../../color-selector-config';

@Component({
    selector: 'ngx-color-selector',
    templateUrl: 'color-selector.component.html',
    styleUrls: ['./color-selector.component.scss']
})
export class NgxColorSelectorComponent implements OnInit {
    height: number;
    width: number;

    @HostBinding('style.height.px') hostHeight: number = this.height || 100;
    @HostBinding('style.width.px') hostWidth: number = this.width || 400;

    public paletteDirection = PaletteDirection;

    private _color: IColor;

    @Input() set color(color: IColor) {
        this.colorSelectorService.currentColor = color;
    }

    get color() {
        return this._color;
    }

    @Output() colorChange = new EventEmitter<IColor>();

    @Input() options: IColorSelectorConfig;

    showPalette = false;

    constructor(private elementRef: ElementRef, private colorSelectorService: NgxColorSelectorService) {

        this.colorSelectorService.currentColor$.subscribe((color: IColor) => {
            this._color = color;
            this.colorChange.next(color);
            this.showPalette = false;
        });

        this.height = this.colorSelectorService.config.itemSize.height;
        this.width = this.colorSelectorService.config.itemSize.width;
    }

    ngOnInit() {
        if (this.options) {
            this.colorSelectorService.config = this.options;
        }
    }

    @HostListener('document:click', ['$event']) clickOff(event) {
        if (!this.showPalette) {
            return;
        }

        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.showPalette = false;
        }
    }

    togglePalette() {
        this.showPalette = !this.showPalette;
    }
}
