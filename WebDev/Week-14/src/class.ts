interface People{
    name: string;
    age: number;
}

class Manager implements People{
    name: string;
    age: number;

    constructor(name: string, age:number){
        this.name = name;
        this.age = age
    }
}

let user1 = new Manager("arjun", 19)
console.log(user1.name, user1.age);