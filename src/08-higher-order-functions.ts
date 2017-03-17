/**
 * Created by MBach on 14.03.2017.
 */


export function higherOrderFunctions () {

    console.log('\n--------------------------------------');
    console.log('higherOrderFunctions');
    console.log('--------------------------------------');

    // --------------------------------------
    // Higher Order Functions
    // 1. Functions that accept a function as parameter


    // --------------------------------------
    // Higher Order Functions
    // 2. Function that return a function

    let createAdder = function() {
        return function(a, b) {
            return a + b;
        };
    };

    console.log(createAdder()(2, 3));
    let myAdder = createAdder();
    console.log(myAdder(2, 3));


}