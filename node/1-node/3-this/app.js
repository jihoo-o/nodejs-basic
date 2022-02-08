// function
function printThis() {
    console.log(this);
}

printThis(); // global

// class
class SomeClass {
    constructor(num) {
        this.num = num;
    }

    memberFunction() {
        console.log('----------');
        console.log(this);
    }
}
console.log(new SomeClass(1)); // class SomeClass

// global scope
console.log(this); // empty object {}
console.log(this === module.exports);
