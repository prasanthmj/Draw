
export class Circle{
    constructor(
        private ctx:CanvasRenderingContext2D,
        public x:number=0,
        public y:number=0,
        public radius:number=10,
        public stroke:string="#999"
    ){
        
    }
    public draw()
    {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        //this.ctx.lineWidth = 5;
        this.ctx.strokeStyle = this.stroke;
        this.ctx.stroke();
    }
}