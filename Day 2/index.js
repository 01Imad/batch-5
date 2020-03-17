// // alert("ready!")

// //JS-Functions

// // function add(a, b){
// //     console.log(a+b)
// // }

// // add(102, 156);

// // var add = function(a, b){
// //     console.log(a+b)
// // }

// // add(525, 569);

// // (function(a, b){
// //     console.log(a, b)
// // })(10, 25);

// // Loops

// // var arr = [1, 2, 3, 4]

// // for(var i = 0; i<arr.length; i++){
// //     console.log(arr[i])
// // }


// // var persons = [
// //     {
// //         name: "xyz",
// //         age: 25
// //     },
// //     {
// //         name: "abc",
// //         age: 55
// //     },
// // ]

// //print o/p "My name is xyz and my age is 25"

// // var i = 0;
// // while(i<persons.length){
// //     console.log("My name is "+persons[i].name+ " My age is "+persons[i].age)
// //     i++;
// // }

// // for (var i = 0; i < 100; i++) {
// //     if (i === 50) {
// //         break
// //     } else {
// //         console.log(i)
// //     }
// // }

// // if(1 === "1"){
// //     console.log("1 is equal to '1'")
// // }

// // if(1 == "1"){
// //     console.log("1 is equal to '1'")
// // }

// // var name = "Imad";
// // var name2 = name;

// // name2 = "Ahmed";

// // console.log(name);
// // console.log(name2);

// // var obj1 = {
// //     name: "xyz"
// // }

// // console.log(obj1.name)

// // var obj2 = obj1;

// // console.log(obj1.name)

// // obj2.name = "abc";

// // console.log(obj1.name)
// // console.log(obj2.name)

// // var arr = [1, 2, 3]

// // var arr2 = arr;

// // arr2 = [1, 2, 3, 4]

// // arr.push(5)

// // console.log(arr)

// // console.log(arr2)

// //scope

// // var car = {
// //     name: "Honda",
// //     model: 2019
// // };

// // function printCarName() {
// //     var car;
// //     car = {
// //         name: "Hyundai",
// //         model: 2020
// //     };
// //     console.log(car);
// //     function printModel() {
// //         console.log(car.name)
// //     }
// //     printModel()
// // }

// // printCarName();

// // Hoisting

// // "use strict";

// // car = {
// //     name: "Honda",
// //     model: 2020
// // }

// // var car;

// // console.log(car.name)

// //this keyword

// // console.log(this);

// var person = {
//     firstName: "Imad",
//     lastName: "Ahmed",
//     printName: function () {
//         console.log(this)
//         console.log("My name is " + this.firstName + " " + this.lastName)
//     }
// }

// console.log(this)

// person.printName();

// //Create an array with car details.

// var car = {
//         model: "Hyundai",
//         name: "Verna",
//         yearMake: 2007,
//         price: 25000,
//         printMakeYear: function(){
//             return "The car model is "+ this.yearMake;
//         },
//         printPrice: function(){
//             //return price
//         },
//         printAllDetails: function(){
//             //return all detials
//         }
//     }

// var body = document.body
// setInterval(function () {
//     body.style.backgroundColor = "#" + Math.floor(Math.random() * 1000)
// }, 2000)

// console.log(car.printMakeYear())

var h1 = document.getElementById("sometext");
h1.innerHTML = "Some Text";

function changeColor() {
    h1.style.color = "green"
}

var body = document.body;
setInterval(function () {
    body.style.backgroundColor = "#" + Math.floor(Math.random() * 1000)
}, 2000)



var timeDate = document.getElementById("timeDate")
setInterval(function () {
    timeDate.innerHTML = new Date();
}, 1000)