import {Shape} from "./shape"
import 'reflect-metadata';
import StrokeStyle from "../stroke";
import { Type } from 'class-transformer';

export class Rectangle extends Shape{
    
    public x:number=0
    public y:number=0
    public width:number=0
    public height:number=0
    
    @Type(()=>StrokeStyle)
    public stroke:StrokeStyle=new StrokeStyle()
        
    constructor(
            x:number,
            y:number,
            width:number,
            height:number
        ){
            super()
            this.x = x;
            this.y= y;
            this.width = width;
            this.height = height;
        }
        
        public draw(ctx:CanvasRenderingContext2D)
        {
            this.stroke.setup(ctx);
            ctx.rect(this.x,this.y, this.width, this.height);
            ctx.stroke.apply(ctx);
        }
        
        public area()
        {
            return this.width * this.height           
        }
        public hitTest(x:number, y:number)
        {
            if(x >= this.x && x <= (this.x + this.width))
            {
                if( y >= this.y && y<= (this.y + this.height))
                {
                    return true;
                }
            }
            return false;
        }
}