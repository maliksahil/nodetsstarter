class SomeClass {
    constructor(public someValue: string) {

    }

    writeTheValue() {
        console.log(this.someValue)
    }
}

const someObject: SomeClass = new SomeClass('someValue');
console.log(someObject.writeTheValue());
