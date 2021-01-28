import { Drawing } from './classes/drawing';
import { Rectangle } from './classes/rectangle';
import { Line } from './classes/line';
import { Circle } from './classes/circle';


let d = new Drawing('canvas');
d.addShape(new Rectangle(10,10,200,300))
d.addShape(new Line(10,10,100,150))
d.addShape(new Circle(100,150,30))
d.draw();

