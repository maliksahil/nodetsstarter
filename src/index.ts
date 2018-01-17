class SomeClass {
    constructor(public someObject: object) {

    }

    writeTheValue() {
        console.dir(this.someObject, { depth: null, colors: true })
    }
}

const someObject: SomeClass = new SomeClass({
    "exampleObject": {
        "title": "example title",
        "exampleComplexChild": {
            "title": "S",
            "number": 12
        }
    }
});

someObject.writeTheValue();
