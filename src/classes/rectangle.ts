
export class Rectangle {
    
    constructor(
            private ctx:CanvasRenderingContext2D,
            public x:number=0,
            public y:number=0,
            public width:number=0,
            public height:number=0,
            public stroke:string="#999"
        ){
            
        }
        
    public draw()
    {
        this.ctx.strokeStyle = this.stroke
        this.ctx.rect(this.x,this.y, this.width, this.height)
        this.ctx.stroke();
    }
    
    
}