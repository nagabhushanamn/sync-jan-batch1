

/*

    this ==> owner of current execution-context

*/


// why we need 'this' keyword ?

//let pName="Global";

// let person = {
//     pName: 'Nag',
//     sayName: function () {
//         let pName = "Local";
//         console.log('im ' + pName); // context's hierarchy data 
//         console.log('im ' + person.pName); // obj's data
//         console.log('im ' + this.pName); // context's owner data
//     }
// };

// // person.sayName();
// let p = person;
// person = { pName: 'sync' }
// p.sayName();

//------------------------------------------------------------


/*


    function-binding

     1. static function-binding
     2. dynamic function-binding

*/


// 1. static function-binding

// // let p1 = { name: 'Nag', sayName: function () { console.log('im ' + this.name); } };
// // let p2 = { name: 'Ria', sayName: function () { console.log('im ' + this.name); } };

// function sayNameForAll() {
//     console.log(this);
//     console.log('im ' + this.name);
// }
// let p1 = { name: 'Nag', sayName: sayNameForAll };
// let p2 = { name: 'Ria', sayName: sayNameForAll };

// sayNameForAll(); // im ??
// p1.sayName(); // im Nag
// p2.sayName(); // im Ria


//------------------------------------------------------------


// 2. dynamic function-binding


// let greetLib = {
//     name: 'greet-lib',
//     sayName: function (message, from) {
//         console.log(message + ' im ' + this.name + " - " + from);
//     }
// };

// // greetLib.sayName();

// let p = { name: 'Nag' };
// let e = { name: 'Sync' };

//way-1 : using call()
// greetLib.sayName.call(p, "Hello", "chennai");
// greetLib.sayName.call(e, "Hey", "bengalore");


//way-2 : using apply()
// greetLib.sayName.apply(p, ["Hello", "chennai"]);
// greetLib.sayName.apply(e, ["Hey", "bengalore"]);

//way-2 : using bind()
// let personSayNameFunc=greetLib.sayName.bind(p, "Hello", "chennai");
// personSayNameFunc();
// personSayNameFunc();

// let empSayNameFunc=greetLib.sayName.bind(e);
// empSayNameFunc('hey',"blr");
// empSayNameFunc('dude',"universe");

//------------------------------------------------------------


// how to to create many similar objects ?

// using constructor functions

// function Person(name,age){
//     this.name=name;
//     this.age=age;
//     this.sayName=function(){
//         console.log('im '+this.name);
//     }
//     this.sayAge=function(){
//         console.log('im '+this.age +" old");
//     }
// }

// let p1=new Person('Nag',33); // constructor invovation
// let p2=new Person('Ria',2);
// //....



//--------------------------------------------------

// in .js-lang , we can invoke function in 4 ways

// 1. function invocation        ( this ==> global-obj)
// 2. method function invocation ( this ==> invoker-obj)
// 3. call/apply/bind invocation ( this ==> arg-obj)
// 4. constructor invocation     ( this ==> new-obj )

let p1=new Person('Nag',33);