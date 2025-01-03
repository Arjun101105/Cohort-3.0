// partial makes all properties of a type optional, creating a type with the same properties, but each marked as optional 

interface USER{
    id: number;
    name: string;
    age: number;
    email: string;
    password: string;
}

type updateProps = Pick<USER, "age" | "email" | "password">

type updatePropsOptional = Partial<updateProps>

function updateUser(updatedProps: updatePropsOptional){
    console.log(`updated e-mail is: ${updatedProps.email}`);
}

updateUser({
    email:'arjun@google.com'
})