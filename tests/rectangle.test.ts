import {  serialize, plainToClass, deserialize } from 'class-transformer';
import { Rectangle } from '../src/classes/rectangle';

test("R1: deserialize rectangle from string to a instance", ()=>{
    const str = '{"x":10,"y":20,"width":100,"height":110,"stroke":"#999"}'
    const rect = deserialize(Rectangle, str)
    expect(rect.area()).toBe(11000)
    expect(rect.hitTest(20,30)).toBe(true)
    expect(rect.hitTest(19,30)).toBe(false)
    console.log("rectangle ", rect)
})

test("R2: deserialize rectangle from object to a instance", ()=>{
    const obj = {
        x:20,
        y:10,
        width:100,
        height:110
    };
    
    const rect = plainToClass(Rectangle, obj)
    expect(rect.area()).toBe(11000)
    expect(rect.hitTest(20,30)).toBe(true)
    expect(rect.hitTest(19,30)).toBe(false)
    console.log("object ", obj)
})

test("R2: deserialize rectangle from instance to a string", ()=>{
    const r = new Rectangle(10,20,120,110)
    const str =  JSON.stringify(r)
    console.log("str\n", str)
    const obj = JSON.parse(str)
    console.log("obj\n", obj)
    // obj.area() does not exist
    
})

test("R3: serialize rectangle to a string", ()=>{
    const r = new Rectangle(10,20,120,110)
    const strRect = serialize(r)
    expect(strRect).toContain(`"x":10`)
    expect(strRect).toContain(`"y":20`)
    expect(strRect).toContain(`"width":120`)
    console.log("strRect ", strRect)
})