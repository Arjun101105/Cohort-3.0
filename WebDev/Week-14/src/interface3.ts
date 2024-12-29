interface People{
    name: string,
    age: number,
    // greet: () => string
}

let person: People = {
    name:"arjun",
    age:19,
    greet: () => {
        return "hi"
    }
}

// let response = person.greet()
// console.log(person.greet());
