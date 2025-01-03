interface Person{
    id: number;
    name: string;
    age: number;
    email: string;
}

// for a profile display pick only name and email

type PersonProfile = Pick<Person, "name" | "email">;

const arjunProfile:PersonProfile = {
    name:"arjun",
    email:"arjun@spaceex.com"
}

const displayProfile = (user: PersonProfile)=>{
    console.log(`Name: ${user.name} Email: ${user.email}`);
}
displayProfile(arjunProfile)
