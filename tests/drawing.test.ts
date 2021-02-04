import {  serialize, deserialize } from 'class-transformer';
import { Drawing } from '../src/classes/drawing';
import {Line, Rectangle, Circle} from '../src/classes/shapes';


test("D1: serialize drawing to string", ()=>{
    let d = new Drawing('canvas');
    d.addShape(new Rectangle(10,10,200,300))
    d.addShape(new Line(10,10,100,150))
    d.addShape(new Circle(100,150,30))
    
    const sd = serialize(d)
    console.log("drawing serialized ", sd)
})


test("D2: deserialize drawing to string", ()=>{
    
    const str = `{
  "shapes": [
    {
      "x": 30,
      "y": 20,
      "width": 100,
      "height": 200,
      "stroke": {
        "width": 2,
        "color": "#999"
      },
      "type": "rectangle"
    },
    {
      "x1": 30,
      "y1": 40,
      "x2": 140,
      "y2": 150,
      "stroke": "#999",
      "type": "line"
    },
    {
      "x": 100,
      "y": 150,
      "radius": 30,
      "stroke": "#999",
      "type": "circle"
    }
  ]
}`    
    const sd = deserialize(Drawing, str)
    expect(sd.shapes[0].area()).toBe(20000); // 100 * 200
    
    console.log("drawing ", sd)
    console.log("drawing area ", sd.area())
})

test("D3: serialize multiple rectangles", ()=>{
  let d = new Drawing('canvas');
  d.addShape(new Rectangle(10,10,200,300))
  d.addShape(new Rectangle(30,10,300,150))
  d.addShape(new Rectangle(20,50,120,110))
  
  const sd = serialize(d)
  console.log("drawing serialized ", sd)
  /**
 {"shapes":[{"x":10,"y":10,"width":200,"height":300,"stroke":{"width":1,"color":"#999"},"type":"rectangle"},{"x":30,"y":10,"width":300,"height":150,"stroke":{"width":1,"color":"#999"},"type":"rectangle"},{"x":20,"y":50,"width":120,"height":110,"stroke":{"width":1,"color":"#999"},"type":"rectangle"}]}
  */
 
})



