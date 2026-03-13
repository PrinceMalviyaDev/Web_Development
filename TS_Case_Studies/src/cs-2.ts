class template{
    public greet(user: string):void{
        console.log(`Hello ${user}`);
    }
}

let obj: template = new template();
obj.greet("Srishti");