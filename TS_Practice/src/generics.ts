function wrapInArray<T>(item: T):T[]{
    return [item, item];
}

console.log(wrapInArray("masala"));
console.log(wrapInArray(25));
console.log(wrapInArray({flavor: "ginger"}));


function pair<A, B>(a: A, b: B): [A, B]{
    return[a, b];
}

pair("Masala", "Test");
pair("Masala", 20);
pair("Masala", {flavor:"ginger"});


// Generic Interface:

interface Box<T> {
    content: T
}

const stringBox: Box<string> = {
    content: "Ten"
}

const numberBox: Box<number> = {
    content: 10
}



function greet<T>(name: T): T[]{
    return [name];    
}

console.log(greet("Prince"));

interface greet<T> {
    greet: T
    message?: T
}

const gr: greet<string> = {
    greet: 'Srishti',
    message: 'Hello'
}

const gr2: Partial<greet<string>> = {
    greet: 'Srishti'
}

const gr3: Required<greet<string>> = {
    greet: 'Srishti',
    message: 'Hello'
}

const gr4: Pick<greet<string>, "greet"> = {
    greet: 'Srishti'
}

const gr5: Omit<greet<number>, "message"> = {
    greet: 10
}

interface APIPromise<T>{
    status: number,
    data: T
}

const res: APIPromise<{flavor: string}> = {
    status: 200,
    data: {flavor: "masala"}
}