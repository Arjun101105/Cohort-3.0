function greet(user:{
    name:string,
    age:number
}){
    console.log(`Hello ${user.name}`);
}

greet({
    name:"Arjun",
    age:19
})

let madPerson = {
    name:"Rohini",
    age:21
}
greet(madPerson)
