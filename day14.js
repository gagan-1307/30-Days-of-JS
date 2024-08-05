// Day 14: Classes
// Tasks/Activities:
// Activity 1: Class Definition
// . Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.
// Define the Person class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
    updateAge(newAge){
        this.age = newAge;
        console.log(`newAge: ${this.age}`);
    }
    static getGenericGreeting() {
        return 'Hello! This is a generic greeting from the Person class.';
    }

}

const person = new Person('Gagan', 18);
console.log(person.getGreeting()); //Output: Hello, my name is Gagan and I am 18 years old.

// . Task 2: Add a method to the Person class that updates the age property and logs the updated age.
person.updateAge(20); //Output: newAge: 20
console.log(person.getGreeting()); //Output: Hello, my name is Gagan and I am 20 years old.


// Activity 2: Class Inheritance
// . Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the
// student ID.
class Student extends Person {
    static studentCount = 0;

    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
        Student.studentCount++;
    }
    getGreeting() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
    getStudentId() {
        return `My student ID is ${this.studentId}.`;
    }
}

const student = new Student('Gagan', 18, '123*****');
console.log(student.getStudentId());//Output: My student ID is 123*****.

// . Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.
console.log(student.getGreeting());//Output: Hello, my name is Gagan, I am 18 years old, and my student ID is 123*****.


// Activity 3: Static Methods and Properties
// . Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.
console.log(Person.getGenericGreeting());//Output: Hello! This is a generic greeting from the Person class.

// . Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
console.log(Student.studentCount);//Output: 1


// Activity 4: Getters and Setters
// . Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.
class newPerson {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(name) {
        const [firstName, lastName] = name.split(' ');
        this.firstName = firstName || '';
        this.lastName = lastName || '';
    }
    getGreeting() {
        return `Hello, my name is ${this.fullName} and I am ${this.age} years old.`;
    }
}
const person1 = new newPerson('Gagandeep', 'Singh', 18);

console.log(`Original full name: ${person1.fullName}`);

// . Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName ). Update the name using the setter and log the updated full name.
person1.fullName = 'Gagan Deep';
console.log(`Updated full name: ${person1.fullName}`);
console.log(person1.getGreeting());