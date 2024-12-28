type userType = {
    firstName:string,
    lastName:string,
    age:number
}

function greetUser(user:userType){
    console.log(`hello ${user.firstName}`);
}

greetUser({
    firstName:"arjun",
    lastName:"nair",
    age:19
})

let dad:userType = {
    firstName:"Manu",
    lastName:"Nair",
    age:55

}

greetUser(dad)