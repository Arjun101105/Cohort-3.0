// given this interface, write a function that takes an array of users as an input and returns the legal users (age>=18) 

interface User5 {
    firstName: string;
    lastName: string;
    age: number
}

function legalUsers(user:User5[]){
    const legalPpl = user.filter((user)=>user.age>=18)
    console.log(legalPpl);
}

legalUsers([{
    firstName:"arjun",
    lastName:"nair",
    age:19
},
{
    firstName:"rohini",
    lastName:"nair",
    age:21
},
{
    firstName:"anuraag",
    lastName:"nair",
    age:13
}
])