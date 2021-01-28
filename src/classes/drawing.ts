import Shape from "./shape";

export class Drawing {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    private shapes: Shape[]= []
    
    constructor(canvasID:string) {
        this.canvas = document.getElementById(canvasID) as
                     HTMLCanvasElement;
        const context = this.canvas.getContext("2d");
        if(context == null){
            throw new Error("your browser does not support drawing")
        }
        this.context = context;
    }
    
    public draw(){
        for(let shape of this.shapes)
        {
            shape.draw(this.context)
        }
    }
    
    public addShape(shape:Shape)
    {
        this.shapes.push(shape);
    }
    
}