interface User{
    name:string;
    age: number;
}

function sumOfAge(user1:User, user2:User){
    return user1.age + user2.age
}

const age = sumOfAge({
    name:"arjun",
    age:19
},
{
    name:"rohini",
    age:21
})

console.log(age);