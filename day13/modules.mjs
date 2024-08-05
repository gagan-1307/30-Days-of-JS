// add two numbers

export function add(a,b) {
    return a+b;
};

export const sub = (a,b) =>a-b; 
export const mul = (a,b) =>a*b; 
const div = (a,b) =>a/b;
export default div;

export const myDetails = {
    name: "Gagan",
    age: 18,
    printDetails: function() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
    }
    
}

