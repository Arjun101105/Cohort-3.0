// promisified function


function promise_one(resolve){
    console.log(`reached promise one ... waiting for 2 seconds`);
    setTimeout(resolve,2000)
}

function promisifiedTimeout(){
    return new Promise(promise_one)
}

const p = promisifiedTimeout()

function callBack(){
    console.log(`2 seconds have passed ... `)
    console.log(`reached call back function`);
    
}

p.then(callBack)

// ******************************************** //


function promise_two(resolve){
    console.log(`waiting for 5 secs ...`);
    setTimeout(resolve, 5000)
}

function main_function(){
    return new Promise (promise_two)
}

const q = main_function()

function calledBack(){
    console.log(`call back is called ...`);
}   

q.then(calledBack)