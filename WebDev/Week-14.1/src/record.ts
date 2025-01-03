// record helps u give a cleaner type to objects

// you can type objects as follows:

// ugly way =>
interface UserOne {
    id: string;
    name:string;
}

type UserS = {[key: string]: UserOne}

const USERS: UserS = {
    'abcd123':{
        id:'abcd123',
        name:'arjun'
    }
}

// using records =>

interface Userr {
    id: string;
    name: string;
}

type USERR = Record<string, Userr>

const users: USERR = {
    'abcd': {id:'abcd', name:'arjun'}
}
console.log(users);
console.log(USERS);