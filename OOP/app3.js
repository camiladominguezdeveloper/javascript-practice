// Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year.
//  Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle'
//   class and includes an additional property for the number of doors. Override the display method to include 
//   the number of doors. 

// function Vehicle(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.details = function(){
//         console.log(`make: ${make}, model: ${model}, year: ${year}.`);
//     }
// };

class Vehicle {
    make;
    model;
    year;
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    details() {
        console.log(`make: ${this.make}, model: ${this.model}, year: ${this.year}`);
    }
};

// let fitito = new Vehicle("Fiat", "Toro", 2008);
// fitito.details();

class Car extends Vehicle {
    doors;
    constructor(make, model, year, doors) {
        super(make, model, year);
        this.doors = doors;
    };

    details() {
        console.log(`make: ${this.make}, model: ${this.model}, year: ${this.year}`);
        console.log(`Number of doors: ${this.doors}`)
    };
};

let fitito = new Car("Fiat", "Toro", 2008, 5);
fitito.details();

let batimovil = new Vehicle ("Peugeot", "208", 2050);
batimovil.details();