/**
 * Created by MBach on 14.03.2017.
 */


export function higherOrderFunctions (): void {

    console.log('\n--------------------------------------');
    console.log('higherOrderFunctions');
    console.log('--------------------------------------');

    // --------------------------------------
    // Higher Order Functions
    // 1. Functions that accept a function as parameter


    // --------------------------------------
    // Higher Order Functions
    // 2. Function that return a function

    const createAdder = function() {
        return function(a, b) {
            return a + b;
        };
    };

    console.log(createAdder()(2, 3));
    const myAdder = createAdder();
    console.log(myAdder(2, 3));

    // not higher order
    const testFatArrow = (a,b) => {
        return a + b;
    };

    console.log(testFatArrow(2, 3));

}
