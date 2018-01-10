


/*

    Execution-Context / scope :

    memory/stack-frame with given args & locals to execute instructions

    2 phases

    phase-1 : context-creation / push

        all variables declared with 'var' keyword in that context,
        will get hiosted to top with default value(undefined)

    phase-2 : context-execution / pop

        instructions execute in seq

    ------------------------------------------------------------------
    
    ==> by default, every .js-runtime has one global-context

    ==> every context executed by an object

    ==> global-context always runs by global-object

    global-object:

    browser-envi  ==> window
    Node.js       ==> process

    ------------------------------------------------------------------

    every function invocation also creates new-context
    which is child of in-which that function has declared

*/



// var v=12;
// console.log(v)

//--------------------------------------------------

// var v=12;
// function f1(){
//     var v=13;
//     console.log(v);
// }
// f1(); // f1-context  <==== global-context

//--------------------------------------------------

// Quiz

// var v=12;
// function f1(){
//     function f2(){
//         console.log(v);
//     }
//     f2();
//     var v=13;
// }
// f1();

//--------------------------------------------------

// var v=12;
// var v=13;

//--------------------------------------------------

// var v=100;
// if(true){
//     var v=200;
// }
// console.log(v);

//--------------------------------------------------

/*

    problems with 'var' keyword 

    ==> variables always get hoist
    ==> we can re-declare sample variables within context
    ==> No block-scope


    soln:

    ==> using 'let' & 'const' kyewords ( from ES6 )

*/

//--------------------------------------------------

// console.log(v);
// let v=12;

//--------------------------------------------------

// var v=12;
// let v=13;

//--------------------------------------------------


// var v = 100;
// if (true) {
//     let v = 200;
// }
// console.log(v);

//--------------------------------------------------

// const config = {
//     url: 'http://',
//     method: 'GET'
// };
// // config=null;
// config.method = "POST"