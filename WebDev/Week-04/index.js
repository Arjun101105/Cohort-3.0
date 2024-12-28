const fs = require("fs")

// a function where you specify a file path and it returns you number of words in that file

function main(fileName){
    fs.readFile(fileName, "utf-8", function(err,data){
        let total = 0;
        for(let i=0;i<data.length;i++){
            if(data[i] === " "){
                total++
            }
        }
        console.log(total + 1);
        
    })
}

main(process.argv[2])