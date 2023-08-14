// Write a JavaScript program to create a class called "Person" with properties for name, age and country.
//  Include a method to display the person's details. Create two instances of the 'Person' class and display 
//  their details.

function Person(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
    this.info = function() {
        console.log(`This person's name is ${name}, they are ${age} years old and they are from ${country}`);
    }
};

const user001 = new Person('Camila', 30, "Argentina");
user001.info();