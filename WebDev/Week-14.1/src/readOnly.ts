type USer = {
    readonly name: string;
    readonly age: number;
}

const user: USer = {
    name:"arjun",
    age: 19
}

type Student = {
    name: string;
    rollNo: number;
}

const arjun: Readonly<Student> = {
    name:"arjun",
    rollNo: 40
}