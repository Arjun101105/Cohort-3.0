// syntax to create a key value pair

type MapUser = {
    name: string;
    age: number;
}


const MappedUser = new Map<string, MapUser>()

MappedUser.set("abcd", {name:"arjun", age:19})
MappedUser.set("efgh", {name:"rohini", age:21})

console.log(MappedUser.get("abcd"));

MappedUser.set("ijkl", {name:"kevin", age:19})
console.log(MappedUser);

MappedUser.delete("ijkl")
console.log(MappedUser);