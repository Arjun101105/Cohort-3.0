// write a function that takes another function as an input and runs it after 1 second 

import { number } from "zod";

function DealyedFn(fn: ()=>void){
    setTimeout(fn,1000)
}

DealyedFn(function(){
    console.log(`hello there ...`);
})
