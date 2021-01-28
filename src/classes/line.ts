import Shape from "./shape"

export class Line extends Shape{
    
    constructor(
        public x1:number=0,
        public y1:number=0,
        public x2:number=0,
        public y2:number=0,
        public stroke:string="#999"){
            super()
        }
    
        public draw(ctx:CanvasRenderingContext2D)
        {
            ctx.beginPath();
            ctx.strokeStyle = this.stroke
            ctx.moveTo(this.x1,this.y1)
            ctx.lineTo(this.x2,this.y2)
            ctx.stroke();
        }

}