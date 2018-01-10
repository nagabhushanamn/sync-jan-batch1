

/*

  data-types
  -----------

  1. simple / primitives ==> values

    a. string
    b. number
    c. boolean
    d. undfined

   2. complex / reference ==> objects  

*/


// 1. simple / primitives ==> values

//----------------------------------------
// a. string

var name = "Nag"
var selection = 'abc'

//----------------------------------------

// b. number

var count = 12;
var cost = 12.12;


//----------------------------------------

// c. boolean

var found = true;

// imp-note: falsy values ==> false,0,"",null,undefined,NAN

//----------------------------------------

// d. undefined

var v;

//----------------------------------------


// 2. complex / reference ==> objects  

/*

    how to create object in .js lang ?

    var ref=new Constructor();

    imp-note:

    by default , all .js-objects are extensible  & configurable

*/


// var config=new Object();
// config.url="http://"
// config.method="GET"
// config.success=function(){
//     //...
// }

// delete config.method;


//----------------------------------------

// Literal-style objects

// a. Object

var config = new Object(); // ==> obj wrapper
config.url = "http://"
config.method = "GET"
config.success = function () {
    //...
}

// or

var config = {
    url: 'http://',
    method: 'GET',
    success: function () {
        //..
    }
}


//----------------------------------------

// b. Array

var arr = new Array();
arr[0] = "idly"
arr.push('vada');

// or

var arr = ["idly", "vada"];

//----------------------------------------

// c. RegExp

var mobilePattern = new RegExp("\\d{10}");
var ssnPattern = new RegExp("\\d{3}-\\d{2}-\\d{4}");

// or

var ssnPattern = /\d{3}-\d{2}-\d{4}/;

//----------------------------------------

// d. Function

var add = new Function("n1", "n2", "var r=n1+n2;return r;")

// or

function add(n1, n2) {
    var r = n1 + n2;
    return r;
}

//----------------------------------------


// how to access obj's properties ?

var person = {
    "name": 'Nag',
    "home-address":"chennai"
};

// person.name="Nag N";
person['name'] = "Nag N";

// console.log(person.name);
console.log(person['name']);

person['home-address']="bangalore";
console.log(person['home-address']);