// // alert("Ready!")

// // ES6 Syntax
// // var name = "Imad";

// // var name = "Rafath";

// // console.log(name)

// // let name = "xyz";

// // let name = "abc";

// // console.log(name)

// // if(1 == "1"){
// //     var a = "a"
// // }

// // console.log(a)

// // if(1 == "1"){
// //     var a = "a";
// // }

// // console.log(a)

// // const arr = [1, 2, 3]

// // // arr.push(4)

// // arr = [1, 2, 3, 4]

// // console.log(arr);

// // function sum(a, b){
// //     return a+b
// // }

// // console.log(sum(1, 4));

// // let sum = (a, b) => a + b;

// // console.log(sum(1, 4));

// const printName = (name) => `My name is ${name}.`

// // const printName = (name) => {
// //     return `My name is ${name}.`
// // }

// console.log(printName("abc"))

// printName();

// let friend = {
//     name: "xyz",
//     contact: 78965412
// }

// let friend2 = friend

// friend2.name = "abc"

// console.log(friend)
// console.log(friend2)

// let friend2 = {...friend};

// friend2.name = "abc"

// console.log(friend)
// console.log(friend2)

// let arr = [1, 2, 3]

// let arr2 = [...arr]

// arr2.push(5)

// console.log(arr)// [1, 2, 3]
// console.log(arr2)// [1, 2, 3, 5]

const sum = (a, b, callback)=>{
    let c = a+b;
    // console.log(c)
    callback(c)
}

const callback = () => {
    console.log("Hello world")
}

sum(2, 4, callback)