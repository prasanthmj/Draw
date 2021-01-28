import Shape from "./shape"
import 'reflect-metadata';
export class Rectangle extends Shape{
    
    public x:number=0
    public y:number=0
    public width:number=0
    public height:number=0
    public stroke:string="#999"
        
    constructor(
            x:number,
            y:number,
            width:number,
            height:number,
            stroke:string="#999"
        ){
            super()
            this.x = x;
            this.y= y;
            this.width = width;
            this.height = height;
            this.stroke = stroke;
        }
        
        public draw(ctx:CanvasRenderingContext2D)
        {
            ctx.strokeStyle = this.stroke
            ctx.rect(this.x,this.y, this.width, this.height)
            ctx.stroke();
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