

export abstract class Shape
{
    abstract draw(ctx:CanvasRenderingContext2D):void;
    abstract area():number;
}