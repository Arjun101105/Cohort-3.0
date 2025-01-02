// INTERSECTION 
// what if you want to create a type that has *every* property of multiple types/interfaces

type Employee = {
    name: string;
    startDate: Date;
}
type Manager1 = {
    name: string;
    department: string;
}

type TeamLead = Employee & Manager1;

const teamLead:TeamLead = {
    name: "Arjun",
    startDate: new Date(),
    department: "IT"
}
console.log(teamLead);

type GooodUser ={
    name: string;
    gifts: string;
}
 type BadUser={
    name:string;
    ip:string;
}

type OurUser = GooodUser | BadUser;

const newuser:OurUser = { 
    name: "Arjun",
    gifts: "Apple",
} // does not need to have all the properties ... can have either or all / have extra properties --> union type
// should contain all the properties --> intersection type
