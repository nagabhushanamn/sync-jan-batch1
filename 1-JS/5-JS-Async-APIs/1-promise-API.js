
let swiggy = {
    getFood: function () {
        let promise = new Promise((resolve, reject) => {
            setTimeout(function () {
                //reject('order rejected bt rest..');
                setTimeout(function () {
                    console.log('resolving swiggy promise..');
                    resolve("BIRYANI");
                }, 2000)
            }, 3000);
        });
        return promise;
    }
}


let bar = {
    getDrink: function () {
        let promise = new Promise((resolve, reject) => {
            setTimeout(function () {
                console.log('resolving/rejecting bar promise..');
                resolve('KF beer');
                //reject('No Service');
            }, 1000);
        });
        return promise;
    }
}

let person = {
    doWork: function () {
        console.log('person working....');
        console.log('feels hungry, request food on swiggy');
        let promise = swiggy.getFood();
        let promise2 = bar.getDrink();
        console.log('got promise..deferring my actions to future');
        Promise.race([promise, promise2]).then((result) => {
            console.log('yummy with ' + result);
        }, (error) => {
            console.log('oops with ' + error);
        });
        console.log('cont...with other work.....end');
    }
}

person.doWork();