const express = require('express')
const app = express()

function calculate_sum(n){
    let sum = 0;
    for(let i = 1;i<=n;i++){
        sum = sum+i
    }
    return sum
}


app.get('/', function(req,res){
    const n = req.query.n
    const ans = calculate_sum(n)
    res.send(`hi your answer is ${ans}`)
})


app.listen(3000)
console.log(`listening on port 3000 ...`);       