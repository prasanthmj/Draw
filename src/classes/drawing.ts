import { Rectangle } from './rectangle';
import { Circle } from './circle';
import { Line } from './line';

export class Drawing {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    private rect:Rectangle;
    private circle:Circle;
    private line: Line;
    
    constructor(canvasID:string) {
        this.canvas = document.getElementById(canvasID) as
                     HTMLCanvasElement;
        const context = this.canvas.getContext("2d");
        if(context == null){
            throw new Error("your browser does not support drawing")
        }
        this.context = context;
        this.rect = new Rectangle(this.context, 10,10,250,50)
        this.circle = new Circle(this.context, 100, 200, 70)
        this.line = new Line(this.context,30,50, 30, 200 )
    }
    
    public draw(){
        this.rect.draw()
        this.circle.draw();
        this.line.draw();
    }
    
}