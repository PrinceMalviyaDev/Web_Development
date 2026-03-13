function invite(name: string, age?:number): void {
    if (age){
        console.log(`Hello ${name}, you are ${age} years old`);
        return
    } else {
        console.log(`Hello ${name}`);
    }
}

invite("Srishti");
invite("Srishti", 0);