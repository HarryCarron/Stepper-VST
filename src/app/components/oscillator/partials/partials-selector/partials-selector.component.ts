import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { PARTIAL_CONTAINER_HEIGHT } from './../../../../services/master.service';
import { noop } from 'rxjs';

@Component({
    selector: 'app-partials-selector',
    templateUrl: './partials-selector.component.html',
    styleUrls: ['./partials-selector.component.css'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => PartialsSelectorComponent),
        multi: true
    }]
})
export class PartialsSelectorComponent implements AfterViewInit {

    constructor() { }

    onTouched;
    onChange;
    partials: number[];

    private _partialCanvas: HTMLCanvasElement;

    @ViewChild('partialCanvas', { static: true })

    set partialsCanvas(e) {
        this._partialCanvas = (e as any).nativeElement;
    }

    get partialCanvasContext() {
        return this.partialsCanvas.getContext('2d');
    }

    private readonly PARTIAL_FILL_COL = '#5be279';

    get partialsCanvas(): HTMLCanvasElement {
        return this._partialCanvas;
    }

    private partialSelectorHeight = PARTIAL_CONTAINER_HEIGHT;
    private partialSelectorWidth: number;

    private getCanvasDimensions(): void {
        this.partialSelectorWidth = this.partialsCanvas.offsetWidth;
    }

    writeValue(partials: number[]): void {
        this.partials = partials;
        if (this.partials) {
            this.draw();
        }
    }

    private draw(): void {
        const pWidth = this.partialSelectorWidth / this.partials.length;
        this.partials.forEach( (p, i) => {
            this.partialCanvasContext.beginPath();
            this.partialCanvasContext.rect(pWidth * i, 0, pWidth * i, p * 100);
            this.partialCanvasContext.fillStyle = this.PARTIAL_FILL_COL;
            this.partialCanvasContext.fill();
        });
    }

    ngAfterViewInit() { this.getCanvasDimensions(); }

    // NGMODEL FUNCTIONS

    registerOnTouched(fn: () => void): void {}

    setDisabledState(isDisabled: boolean): void { noop(); }



    registerOnChange(fn: (partials: number[]) => void): void { this.onChange = fn; }

}