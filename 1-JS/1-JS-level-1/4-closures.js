

/*

A closure is a function having access to the parent scope, 
even after the parent function has closed.

*/

// function teach(sub) {
//     console.log('teching ' + sub);
//     let notes = sub + "-notes";
//     let fun = "bla bla";
//     let learn = function () {
//         console.log('learning with ' + notes);
//     }
//     //learn();
//     console.log('teaching end...');
//     return learn;
// }

// let learnFunc = teach('.js');  // teach-contet created with args & locals

// learnFunc();
// learnFunc();


/*

  where/when i shud use closures ?

  ==> to abstract public behav of any module 
  ==> while executing async , to access parent scoped data

*/


// ==> to abstract public behav of any module 


/*

     e.g counter module

        count:0
        doCount()
        getCount()

*/

const counter = (function () {
    var count = 0;  // private
    // public
    function doCount() {
        count++;
    }
    function getCount() {
        return count;
    }
    return {
        inc: doCount,
        get: getCount
    }
})();

// let counter = init();
// let counter2 = init();