

// ---------------------------------------------------------

// string interpolation

// let tnr = {
//     name: 'Nag'
// };
// let sub = '.js'

// let dynamicString = "the trainer , " + tnr.name + " , killing with " + sub;
// or
// let dynamicString = `the trainer , ${'Mr.' + tnr.name} , killing with " + ${sub}, Exp - ${1 + 2 + 3}`;

// let template=`
//     <div>
//         <h1> ${1+2} </h1>
//     </div>
// `;

// ---------------------------------------------------------

// - obj-literal enhancements

// let name = "Nag";
// let age = 33;
// let dynamicField = "office";  // office | vacation 

// // es5
// let person1 = {
//     name: name,
//     age: age,
//     sayName: function () {
//         //..
//     },

// }
// // es6
// let prop = "name";
// let person2 = {
//     name,
//     age,
//     [dynamicField + "-address"]: '.....',
//     sayName() {
//         //..
//     },
//     'say Age'() {
//         //....
//     },
//     set [prop]() {

//     }
// }

// person2['say Age']();

// ---------------------------------------------------------

// destructuring

// let arr = [100, 200, 300, 500, 600, 700, [10, 20]];

// // let min=arr[0];
// // let avg=arr[1];
// // let max=arr[2];

// // let [min, avg, max, other = 400, , last, [a, b]] = arr;

// let v1;
// let v2;

// [v1, v2] = arr;



// let person = {
//     name: 'Nag',
//     age: 33
// };

// let name = person.name;
// let age = person.age;

// let { name: name, age: age } = person;
// let { name, age } = person;
// let { name: myName, age: myAge } = person;

// let myName;
// let myAge;

// ({ name: myName, age: myAge } = person);

// ---------------------------------------------------------

// - spread operator

// function func(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// let nums = [1, 2, 3];
// func(...nums);

// let arr1 = [1, 2, 3]
// let arr2 = [7, 8, 9];
// let arr3 = [...arr1, 4, 5, 6, ...arr2];

// ---------------------------------------------------------

// - symbols

// let s1 = Symbol.for('java');
// let s2 = Symbol.for('js');


// let e1 = { name: 'A', [s1]: 'java,spring,hibernate' }
// let e2 = { name: 'B' }
// let e3 = { name: 'C' }
// let e4 = { name: 'D', [s2]: 'javascript,angular' }


// if(e1[s2]){

// }

//--------------------------------------------------------

// - for-of-loop with iterable objects

// let menu = ["idly", "vada", 'poha']

// for(let item of menu){
//     console.log(item);
// }

// let newMenu = [...menu];

// let [item1, item2] = menu;


// let idMaker = {
//     [Symbol.iterator]: function () {
//         let id = 0;
//         return {
//             next: function () {
//                 id++
//                 return { value: id <= 10 ? id : undefined, done: id <= 10 ? false : true }
//             }
//         }
//     }
// }


// for(let id of idMaker){
//     console.log(id);
// }

// let ids=[...idMaker];

//
// let [id1,id2,id3]=idMaker;

//--------------------------------------------------------

// - arrow function

// let getPrice = function () {
//     return 100 + 200;
// }

// let getPrice = () => {
//     return 100 + 200;
// }

// let getPrice = () => 100 + 200;
// let getPrice = (count) => count * (100 + 200);
// let getPrice = count => count * (100 + 200);
// let getPrice = (count, tax) => count * (100 + 200) + tax;
// let getPrice = (count, tax) => {
//     let cost = count * (100 + 200);
//     let total = cost + tax
//     return total;
// };

/*

    why we need arrow-fnction ?

    ==> to make compact function-arg
    ==> to capture 'this'

          i.e always bound to creator-obj, we cannot bind to other objects 



    limitation on regular-function

     ==> by default they bound to global-obj
     else
     ==> we can dynamically bind to any other obj

*/

// let nums = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
// nums.sort(function (a, b) { return a - b; });
// nums.sort((a, b) => a - b);



// let tnr = {
//     name: 'Nag',
//     doTeach: function () {
//         console.log(this.name + " teaching .js");
//         // let askQues = function (q) {
//         //     console.log(this.name + " answering " + q);
//         // }
//         // or
//         let askQues = (q) => {
//             console.log(this.name + " answering " + q);
//         }
//         console.log("teaching .js end");
//         return askQues;
//     }
// }

// let askQues = tnr.doTeach();
// askQues("Q1");
// let tmpTnr = { name: 'Kannan' }
// askQues.call(tmpTnr, "Q2");


//---------------------------------------------------------



// let invoice = {
//     num: 123,
//     process:function() {
//         console.log("INV-" + this.num + " procesed...");
//     }
// }

// let invoice = {
//     num: 123,
//     process: () => {
//         console.log("INV-" + this.num + " procesed...");
//     }
// }

// let invoice = {
//     num: 123,
//     process() {
//         console.log("INV-" + this.num + " procesed partially..");
//         return function () {
//             console.log("INV-" + this.num + " procesed completly..");
//         }
//     }
// }


// let invoice = {
//     num: 123,
//     process() {
//         console.log("INV-" + this.num + " procesed partially..");
//         return () => {
//             console.log("INV-" + this.num + " procesed completly..");
//         }
//     }
// }


// let complete = invoice.process();
// complete();




// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     // let self = this;
//     // let incAge = function () {
//     //     self.age++;
//     //     console.log(self.age);
//     // }
//     let incAge = () => {
//         this.age++;
//         console.log(this.age);
//     }
//     window.setInterval(incAge, 1000);
// }

// new Person('Ria', 1);


//---------------------------------------------------------


// - class - syntax


// ES-5
// function Person(name, age) {
//       this.name = name;
//       this.age = age;
// }
// Person.prototype.sayName = function () {
//       console.log('im ' + this.name);
// }
// Person.prototype.sayAge = function () {
//       console.log('im ' + this.age + " old");
// }

// Es-6
class Person {
      constructor(name, age) {
            this.name = name;
            this.age = age;
            console.log('Person :: constructor');
      }
      sayName() {
            console.log('im ' + this.name);
      }
      sayAge() {
            console.log('im ' + this.age + " old");
      }
}

// let p1 = new Person('Nag', 33);

class Employee extends Person {
      constructor(name, age, salary) {
            super(name, age);
            this.salary = salary
            console.log('Employee :: constructor');
      }
      saySalary() {
            console.log('i get ' + this.salary + " olny");
      }
      getBonus() {
            return this.salary * 0.02;
      }
}

// let e = new Employee('Nag', 33, 1000);

class Boss extends Employee {
      getBonus() {
            return this.salary * 0.2 + super.getBonus();
      }
}

let b = new Boss('Nag', 33, 1000);



class Abc {
      static staMethod() {
            //
      }
}
Abc.staVar = 123;




