interface Address{
    city:string,
    country:string,
    pincode:number
}
interface User {
    name:string;
    age:number;
    address?: Address   // address is an optinal field and not required (?: => optional)
}
interface Office {
    address:Address
}

let user: User = {
    name:"Arjun",
    age:19,
}

function isLegal(user: User): boolean{
    if(user.age >= 18) {
        return true
    }else{
        return false
    }
}

const answer = isLegal(user);
if(answer){
    console.log(`I am legal`);
}else{
    console.log(`I am not legal`);
}