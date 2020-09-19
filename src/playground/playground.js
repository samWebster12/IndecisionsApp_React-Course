class Person {
    constructor(name = 'not named', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return 'Hi ' + this.name;
    }

    getDescription() {
        return `${this.name} is ${this.age} years old`;
    }
}

class Student extends Person{
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
        return this.hasMajor() ? `${description} and is studying ${this.major}` : description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        return !!this.homeLocation ? `${greeting}. Your home location is ${this.homeLocation}` : greeting;
    }
}

let me = new Traveler('Sam', 15, 'Argentina');
console.log(me.getGreeting());
