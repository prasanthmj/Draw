export class Line{
    
    constructor(
        private ctx:CanvasRenderingContext2D,
        public x1:number=0,
        public y1:number=0,
        public x2:number=0,
        public y2:number=0,
        public stroke:string="#999"){}
    
        public draw()
        {
            this.ctx.beginPath();
            this.ctx.strokeStyle = this.stroke
            this.ctx.moveTo(this.x1,this.y1)
            this.ctx.lineTo(this.x2,this.y2)
            this.ctx.stroke();
        }

}