import 'reflect-metadata';
import { ExcludeDefault } from './exclude'

export default class StrokeStyle{
    @ExcludeDefault(1)
    public width:number=1;
    
    @ExcludeDefault('#999')
    public color:string="#999";
    
    public setup(ctx:CanvasRenderingContext2D)
    {
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.width;
    }
    
    public apply(ctx:CanvasRenderingContext2D)
    {
        ctx.stroke();
    }
}