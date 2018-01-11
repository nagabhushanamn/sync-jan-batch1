

var Rx = require('rxjs/Rx');

const stream = Rx.Observable.create((observer) => {
    let n = 0;
    let interval = setInterval(function () {
        n++;
        console.log('emitting new data/event into stream');
        observer.next(n); // event/data
        if (n === 10) {
            observer.complete()
            clearInterval(interval);
        }
    }, 100);
});
let evenNumStream = stream.filter(n => {
    if (n % 2 === 0)
        return n
});


// View  ( even nums)
evenNumStream.subscribe((result) => {
    console.log(result);
}, (error) => {
    console.log(error);
}, () => {
    console.log("no more nums");
});
