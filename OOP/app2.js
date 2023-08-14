// Write a JavaScript program to create a class called 'Rectangle' with properties for width and height.
//  Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle'
//   class and calculate its area and perimeter. 

function Rectangle(width, height) {
this.width = width;
this.height = height;
this.perimeter = function() {
    let p = 2 * (width + height);
    console.log(`The perimeter is ${p}`)
}
this.area = function() {
    let a = width * height;
    console.log(`The area is ${a}`)
}
};

let rectangle1 = new Rectangle(2, 3);
rectangle1.perimeter();
rectangle1.area();

let rectangle2 = new Rectangle(3, 5);
rectangle2.area();
rectangle2.perimeter();