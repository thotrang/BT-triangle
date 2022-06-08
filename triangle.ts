import {Shape} from "./shape";

export class Triangle extends Shape{
    private _side1:number;
    private _side2:number;
    private _side3:number;

    constructor(color: string, name: string, side1: number, side2: number, side3: number) {
        super(color, name);
        this._side1 = side1;
        this._side2 = side2;
        this._side3 = side3;
    }

    get side1(): number {
        return this._side1;
    }

    set side1(value: number) {
        this._side1 = value;
    }

    get side2(): number {
        return this._side2;
    }

    set side2(value: number) {
        this._side2 = value;
    }

    get side3(): number {
        return this._side3;
    }

    set side3(value: number) {
        this._side3 = value;
    }
    getArea(){
        let p=(this._side1+this._side2+this._side3)/2;
        return Math.sqrt(p*(p-this._side1)*(p-this._side2)*(p-this._side3))
    }
    getPerimeter(){
        return this._side1+this._side2+this._side3;
    }
}