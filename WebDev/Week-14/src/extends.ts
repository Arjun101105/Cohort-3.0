import { readConfigFile } from "typescript";

class Shape{
    area()
    {console.log("Hi i am area");
    }
}

class Rectangle extends Shape{
    width: number;
    height: number;

    constructor(){
        super()
        this.width = 1;
        this.height = 2
    }
}

const r = new Rectangle()
r.area()