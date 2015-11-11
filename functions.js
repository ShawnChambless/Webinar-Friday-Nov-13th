// write a function that logs 'Hello world' in the console

var logHello = function() {
    console.log('Hello');
};

// write a function that loops through an array and logs every item in the array in the console
var myArray = [1, 2, 'shawn', 'this', 'is', 'fun'];

var looper = function(arr) {
    for(var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
};
looper(myArray);

// now loop through an array of objects and log every property of every object
var myObjArr = [{name: 'Shawn', age: 27}, {name: 'Ryan', age: 45}, {name: 'Mark', age: 30}];

var objLooper = function(arr) {
    for(var i = 0; i < arr.length; i++) {
        for(var prop in arr[i]) {
            console.log(prop + ':', arr[i][prop]);
        }
    }
};

objLooper(myObjArr);
