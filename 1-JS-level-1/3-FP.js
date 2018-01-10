

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

// function greet() {
//     console.log("Hello...");
// }

// let greet = 10;

// var sayHello = greet;
// sayHello();

//--------------------------------------------------

// A parameter of a function can be a function

// function greet(f) {
//     if (f) {
//         f();
//         return;
//     }
//     console.log('Hello..');
// }

// greet();
// greet(function(){console.log('ola...')});

// e.g

// let nums=[1,3,5,7,9,2,4,6,8,10];
// nums.sort();
// nums.sort(function(a,b){return a-b});

//--------------------------------------------------

// The return value of a function can be a function

// function teach(){
//     console.log('teaching...');
//     let learn=function(){
//         console.log('learning..');
//     }
//     return learn;
// }

// let learnFunc=teach();

// learnFunc();
// learnFunc();

//--------------------------------------------------


// function reflect(a,b,c){
//     console.dir(arguments);
//     return arguments[0];
// }

// console.log(reflect(12,13,14));

// Quiz

// function getFood() {
//     return "No Food";
// }
// // var getFood=new Function(...);

// function getFood(pay) {
//     if (arguments.length === 0) {
//         return "No Food"
//     }
//     return "biryani"
// }
// // var getFood=new Function(...);

// console.log(getFood());

//---------------------------------------------


// function sum(){
//     let r=0,
//         len=arguments.length,
//         i=0;
//     while(i<len){
//         r+=arguments[i];
//         i++;
//     }     
//     return r;
// }

//---------------------------------------------

// function with default params ( es6 )

// function func(a=1, b=2) {

//     // if (!a) a = 1
//     // if (!b) b = 2

//     // a = a || 1
//     // b = b || 2

//     console.log(a);
//     console.log(b);
// }
// func(undefined, 20);

//---------------------------------------------

// function with rest param ( es6 )

// function func(a, b, ...r) {
//     console.log(a);
//     console.log(b);
//     console.log(r);
//     console.log(Array.isArray(r))
// }

// func(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);