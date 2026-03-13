function identity<T>(value: T): T{
    return value;
}

console.log(identity<number>(3));

function echoAny(arg:any):any{ return arg };
function echoGeneric<T>(arg:T):T{ return arg };

console.log(echoAny(3));
console.log(echoGeneric<string>("Srishti"));

function pair<A, B>(name: A, age:B): [A, B]{
    return [name, age];
}

pair("Prince", 22);

type User<T> = {
    name: T,
    age: number
}

let u1: User<string> = {
    name : "Prince",
    age: 20
}

class UserProfile<T>{
    name:T;
    constructor(name:T){
        this.name = name;
        console.log(this.name);
    }
}

let u2: UserProfile<string> = new UserProfile<string>("Srishti");

interface APIResponse<T> {
    name: T,
    status: number
}

const res: APIResponse<string> = {
    name: "Prince",
    status: 200
}


// type Record<A, B>  = {
//     a: A,
//     b: B
// }

const ab: Record<string, number> = {
    a: 23,
    b: 22
}

console.log(ab);

interface hasId {
    id: string
}

function work<T extends hasId>(item: T): void{
    console.log(item);
}

work<{id: string, name:string}>({id: "A1", name: "Prince"});
work({id: "A2"});
work({id: "A3", status:1});


function merge<A, B>(a:A, b:B): A & B {
    return {...a, ...b};
}

console.log(merge<{},{}>({a: "Srishti"},{b: "Prince"}));

type ApiResponse<T> = {
    data: T,
    status: number
}

type UserData = {
    name: string,
    age: number
}

const apiRes: ApiResponse<UserData> = {
    data: {name: "Prince", age: 22},
    status: 200
}

console.log(apiRes);

const apiRes2: ApiResponse<{name: string, age: number}>= {
    data: {name: "Prince", age: 22},
    status: 200
}

console.log(apiRes2);

class List<T>{
    items:T[] = [];
    add(item:T): T[]{
        this.items.push(item);
        return this.items;
    }
}

const lst = new List<unknown>();
lst.add("Apple");
lst.add(3);
console.log(lst.add(true));

