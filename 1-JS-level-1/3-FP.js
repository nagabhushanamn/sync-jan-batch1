

// How to create function(s) in .js-lang ?

/*
    2 - ways

    1. function declaration

        ==> Named function
        ==> function-obj created when context creation-phase
        ==> always get hoist

    2. function Expression

        ==> anonymous function
        ==> function-obj created when context execution-phase 
*/

//--------------------------------------------------

// 1. function declaration

// console.log(add(12,13));
// function add(n1,n2){
//     return n1+n2;    
// }
// console.log(add(12,13));

//--------------------------------------------------

// 2. function Expression

// console.log(add(12,13));

// var add=function(n1,n2){
//     return n1+n2;
// }

// console.log(add(12,13));

//--------------------------------------------------

// let userType;
// let userAction;
// function login() {
//     userType = "admin";
// }
// if(userType==="admin"){
//     userAction=function(){
//         //..
//     }
// }else{
//     userAction=function(){
//         //..
//     }
// }

//--------------------------------------------------

// FP concepts

// A function can be stored in a variable or value

function greet() {
    console.log("Hello...");
}

let greet = 10;

// var sayHello = greet;
// sayHello();

