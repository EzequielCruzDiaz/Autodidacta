//variables
let firstname = "junior";
let age = 30;
let isAproved = true;

console.log(typeof (firstname))
console.log(typeof (age))
console.log(typeof (isAproved))


//objeto
let person = {
    firstname: "junior",
    age: 30,
    isAproved: true
}
console.log(person.firstname)

//dot notation
person.firstname = "Ezequiel"
console.log(person.firstname)
// bracket notation
person["firstname"] = "lulo"
console.log(person.firstname)