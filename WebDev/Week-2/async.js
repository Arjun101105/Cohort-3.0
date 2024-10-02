function setTimeoutPromisified(time){
    return new Promise(function(resolve){
        setTimeout(resolve,time)
    })
}

async function solve() {
    await setTimeoutPromisified(1000)
    console.log(`hi`);
    await setTimeoutPromisified(3000)
    console.log(`hello`);
    await setTimeoutPromisified(4000)
    console.log(`hello there`); 
}

solve()

console.log(`last line of code`);
