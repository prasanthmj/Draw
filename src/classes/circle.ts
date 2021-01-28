import Shape from "./shape"
export class Circle extends Shape{
    constructor(
        public x:number=0,
        public y:number=0,
        public radius:number=10,
        public stroke:string="#999"
    ){
        super()
    }
    public draw(ctx:CanvasRenderingContext2D)
    {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        ctx.strokeStyle = this.stroke;
        ctx.stroke();
    }
}