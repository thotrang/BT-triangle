export class Shape{
    private _color:string;
    private _name:string;

    constructor(color: string, name: string) {
        this._color = color;
        this._name = name;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}