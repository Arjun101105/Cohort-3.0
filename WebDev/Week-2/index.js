
const fs = require('fs');

const data = fs.readFileSync('./a.txt', 'utf-8')
console.log(data);


// functional arguments

function add(a, b){
    return a + b
}

function multiply(a, b){
    return a * b
}

function subtract(a, b){
    return a - b
}

function divide(a, b){
    return a / b
}

function doOperation(a, b, op){
let val = op(a, b)
return val
}

console.log(doOperation(1,2,divide));

console.log(doOperation(5,2,add));

function print(err, data){
    console.log(data);
    
}

fs.readFile('./a.txt', 'utf-8', print)
fs.readFile('./b.txt', 'utf-8', print)
console.log("Done !");


// promisified setTimeout

const promiseOne = new Promise(function(res,rej){
    setTimeout(() => {
        console.log('promisified settimeout ??');
        
    }, 1000);
})