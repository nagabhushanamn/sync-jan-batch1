
interface Wheel {
    rotate: () => void
}

class CEATWheel implements Wheel {
    rotate() {
        console.log('CEAT wheel rotating...');
    }
}

class MRFWheel implements Wheel {
    rotate() {
        console.log('MRF wheel rotating...');
    }
}

class Car {
    wheel: Wheel
    constructor(wheel: Wheel) {
        this.wheel = wheel;
    }
    move() {
        this.wheel.rotate();
        console.log('Car Moving...');
    }
}

/*

        design & performance issues
        ---------------------------

        ==> tight-coupling between dependent & dependency objects

                --> maintainence, cant extend with new features..

        ==> too many duplicate dependency instances are created & destructed..

                --> slow,memory use hiigh..

        ==> Unit-Testing not possible

                --> dev/bug-fix slow


         reason for these issues ?
         
         ==> dependent itself creating its own dependency..

         soln:

           ==> dont create , do Lookup

         limitation on lookup:
         
         ==> location tight-coupling

         best soln:

         dont create/lookup , inject by 'some-one'  ( IOC )

         how to implement IOC ?

         using 'Dependency Injection'

         ==> constructor DI
         ==> setter DI



*/

let mrfWheel:Wheel=new MRFWheel()
let car = new Car(mrfWheel);
car.move();
car.move();