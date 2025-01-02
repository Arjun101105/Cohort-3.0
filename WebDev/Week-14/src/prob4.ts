// Interface vs Types
// Create two types called User and Admin
// Create a function that takes either User or Admin as an input, and returns a string saying "Welcome, [name]"


interface User4 {
    name: string;
    age: number;
    // hasAccess: boolean
}

interface Admin4  {
    name: string;
    age: number;
    hasAccess: boolean
}


function greetPerson(user:User4 | Admin4){
    console.log(`Welcome, ${user.name}`);
}
greetPerson({
    name:"arjun",
    age:18
})
