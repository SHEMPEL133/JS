function construct(Class) {
    let obj = new Class(arguments[1]);
    return  obj; 
}

function Greeting(name) {
    this.name = name;
}

Greeting.prototype.sayHello = function () {
    return "Hello " + this.name;
};


Greeting.prototype.sayBye = function () {
    return "Bye " + this.name;
};

console.log(construct(Greeting, 'John'));