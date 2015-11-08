// define an object named shawn with 2 properties - name, and age

var shawn = {
    name: 'Shawn',
    age: 27
};


// add a favorite color property to shawn

shawn.favoriteColor = 'blue';

// add a method that console.logs 'Hi' with shawn's name

shawn.logHello = function() {

    console.log('Hi', shawn.name);

};

// make a constructor function that creates new people with three properties - name, age, favorite color

var Person = function(name, age, favoriteColor) {

    this.name = name;
    this.age = age;
    this.favoriteColor = favoriteColor;

};

// or
// *** NOTE *** Will not attach prototypical methods

var Person = function(name, age, favoriteColor) {

    return {
        name: name,
        age: age,
        favoriteColor: favoriteColor
    };

};

// attach a prototypical method to all new people that logs '<name> is <age> years old, and likes the color <favorite color>'

Person.prototype.logPerson = function() {

    console.log(this.name, 'is', this.age, 'years old, and likes the color', this.favoriteColor + '.');

};

// or

Person.prototype.logPerson = function(name, age, favoriteColor) {

    console.log(name, 'is', age, 'years old, and likes the color', favoriteColor);

};


// Make a new person object using the constructor, and assign it your name, age, and favorite color

var brent = new Person('Brent', 33, 'Red');
