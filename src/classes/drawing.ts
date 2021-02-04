import { Type, Exclude} from 'class-transformer';
import {Line, Rectangle, Circle, Shape} from './shapes';


export class Drawing {
    @Exclude()
    private canvas: HTMLCanvasElement|null =  null;
    
    @Exclude()
    private context: CanvasRenderingContext2D|null=null;
    
    @Type(()=>Shape, {
        discriminator: {
            property: 'type',
            subTypes: [
                { value: Line, name: 'line' },
                { value: Rectangle, name: 'rectangle' },
                { value: Circle, name: 'circle' },
          ],
        },
    })
    public shapes: Shape[]= []
    
    constructor(canvasID:string) {
        this.canvas = document.getElementById(canvasID) as
                     HTMLCanvasElement;
                     
        if(this.canvas != null )
        {
            const context = this.canvas.getContext("2d");
            if(context != null)
            {
                this.context = context;
            }
        }
    }
    
    public draw(){
        if(this.context == null )
        {
            return;
        }
        for(let shape of this.shapes)
        {
            shape.draw(this.context)
        }
    }
    
    public addShape(shape:Shape)
    {
        this.shapes.push(shape);
    }
    
    public area()
    {
        let area:number = 0
        for(let shape of this.shapes)
        {
            area += shape.area()
        }
        return area;
    }
    
}