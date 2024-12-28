function setTimeoutPromisified(time) {
    return new Promise(function (res) {
        setTimeout(res, time)
    })
}

// callback hell

/* setTimeoutPromisified(1000).then(function () {
        console.log(`hi`);
        setTimeoutPromisified(3000).then(function () {
            console.log(`hello`);
            setTimeoutPromisified(5000).then(function () {
                console.log(`hello there`);
            })
        })
})*/


// promise chaining

setTimeoutPromisified(1000).then(function(){
    console.log(`clean`);
    return setTimeoutPromisified(3000)
}).then(function(){
    console.log(`cleaner`);
    return setTimeoutPromisified(4000)
}).then(function(){
    console.log(`cleanest`);
    
})
