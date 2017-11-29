import { ElementRef, OnInit, EventEmitter } from '@angular/core';
import 'd3-selection-multi';
export interface Options {
    skin?: {
        type: string;
        width: number;
        color: string;
        spaceWidth: number;
    };
    animate?: {
        enabled: true;
        duration: number;
        ease: string;
    };
    size: number;
    startAngle: number;
    endAngle: number;
    unit: string;
    displayInput: true;
    inputFormatter: any;
    readOnly: boolean;
    trackWidth: number;
    barWidth: number;
    trackColor: string;
    barColor: string;
    prevBarColor: string;
    textColor: string;
    barCap: number;
    trackCap: number;
    fontSize: string;
    fontWeigth: string;
    fontFamily: string;
    subText: {
        enabled: false;
        text: '';
        fontFamily: string;
        fontWeight: string;
        color: string;
        font: string;
        offset: number;
    };
    bgColor: string;
    bgFull: false;
    scale: {
        enabled: false;
        type: string;
        color: string;
        width: number;
        quantity: number;
        height: number;
        spaceWidth: number;
    };
    step: number;
    displayPrevious: false;
    min: number;
    max: number;
    dynamicOptions: false;
}
export declare class Ng2KnobDirective implements OnInit {
    private el;
    element: HTMLElement;
    value: number;
    label: number;
    options: any;
    valueChange: EventEmitter<number>;
    inDrag: Boolean;
    bgArc: any;
    trackArc: any;
    changeArc: any;
    valueArc: any;
    interactArc: any;
    hoopArc: any;
    changeElem: any;
    valueElem: any;
    defaultOptions: Options;
    animations: any;
    constructor(el: ElementRef);
    /**
     * Implement this interface to execute custom initialization logic after your directive's data-bound properties have been initialized.
     * ngOnInit is called right after the directive's data-bound properties have been checked for the first time, and before any of its children have been checked.
     * It is invoked only once when the directive is instantiated.
     */
    ngOnInit(): void;
    /**
     * Actions when value or options change in host component
     */
    ngOnChanges(changes: any): void;
    /**
     *   Convert from value to radians
     */
    valueToRadians(value: number, valueEnd: number, angleEnd?: number, angleStart?: number, valueStart?: number): number;
    /**
     *   Convert from radians to value
     */
    radiansToValue(radians: number, valueEnd: number, valueStart: number, angleEnd: number, angleStart: number): number;
    /**
     *   Create the arc
     */
    createArc(innerRadius: number, outerRadius: number, startAngle?: number, endAngle?: number, cornerRadius?: number): any;
    /**
     *   Draw the arc
     */
    drawArc(svg: any, arc: any, label: string, style: any, click?: any, drag?: any): any;
    /**
     *   Create the arcs
     */
    createArcs(): void;
    /**
     *   Draw the arcs
     */
    drawArcs(clickInteraction: any, dragBehavior: any): void;
    /**
     *   Draw knob component
     */
    draw(): void;
    /**
     *   Set a value
     */
    setValue(newValue: any): void;
}
