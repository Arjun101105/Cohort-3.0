//classes in JS

class Rectangle{
    constructor(height, width, color){
        this.height = height
        this.width = width
        this.color = color
        console.log(this);
        
    }

    area(){
        const area = this.width * this.height
        return area
    }

    paint(){
        console.log(`Painting with color ${this.color}`)
    }
}

const rect = new Rectangle(10, 10, "white")
console.log(rect.area());
// console.log(rect.paint());

// maps
const map = new Map()
map.set('name', 'arjun')
map.set('age', 18)
console.log(map.get('name'));

// promises

function setTimeoutPromisified(ms){
    return new Promise(resolve =>setTimeout(resolve,ms));
}

p = setTimeoutPromisified()


function callBack(){
    console.log(`3 seconds have passed`);
}
// setTimeoutPromisified(3000).then(callBack)

// new

function waitFor3s(resolve){
    setTimeout(resolve,3000)
}

function main(){
    console.log(`main is called`);
    
}

waitFor3s(main)