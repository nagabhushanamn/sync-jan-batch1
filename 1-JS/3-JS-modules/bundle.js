(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
console.log('-app.js-');

//----------------------------------------

// var sync = sync || {}
// sync.mod1.doWork();

//----------------------------------------

let syncGreet = require('sync-jan-greet');
syncGreet.greet();
syncGreet.greet('en');
syncGreet.greet('es');
},{"sync-jan-greet":4}],2:[function(require,module,exports){


// var o = {
//     doWork: function () {
//         console.log('im mod2');
//     }
// };

//----------------------------------------

// var sync = sync || {};
// (function () {
//     var o = {
//         doWork: function () {
//             console.log('im mod2');
//         }
//     };
//     sync.mod2 = o;
// })();

//----------------------------------------

function greet(){
    console.log('Hello...');
}
module.exports=greet;
},{}],3:[function(require,module,exports){


// var o = {
//     doWork: function () {
//         console.log('im mod3');
//     }
// };

//----------------------------------------
// var sync = sync || {};
// (function () {
//     var o = {
//         doWork: function () {
//             console.log('im mod3');
//         }
//     };
//     sync.mod3 = o;
// })();

//----------------------------------------


function greet(){
    console.log('Ola...');
}
module.exports=greet;
},{}],4:[function(require,module,exports){


// var o = {
//     doWork: function () {
//         console.log('im mod1');
//     }
// };

//----------------------------------------

// var sync = sync || {};
// (function () {

//     sync.mod2.doWork();
//     sync.mod3.doWork();

//     var pro = 12;
//     var o = {
//         doWork: function () {
//             console.log('im mod1');
//         }
//     };
//     sync.mod1 = o;  // export
// })();

//----------------------------------------

console.log('-mod1.js-');
let en = require('./en');
let es = require('./es');

// var message = "Hello..";
function greet(lang) {
    if (lang === "en") {
        en(); return;
    }
    if (lang === 'es') {
        es(); return;
    }
    console.log('Namaskara..in KA');
}
// greet();
module.exports = {
    greet
};
},{"./en":2,"./es":3}]},{},[1]);
