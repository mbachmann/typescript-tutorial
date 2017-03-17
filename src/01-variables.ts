/**
 * Created by MBach on 14.03.2017.
 */


export function variables () {

    console.log('\n--------------------------------------');
    console.log('variables');
    console.log('--------------------------------------');


    // --------------------------------------
    // Variables - Declaration
    var value;
    const pi = 3.1416;
    let $value__123;


    // --------------------------------------
    // Variables - Fun fact
    let ಠ_ಠ = Math.PI;
    console.log(ಠ_ಠ);


    // --------------------------------------
    // Variables - hold the result of an expression
    let todayIs = 'Today is: ';

    let helloFunction = function () {
        return todayIs;
    };

    let returnValue = getCurrentDate();

    console.log(helloFunction() + " " + returnValue);

    function getCurrentDate() {
        return new Date();
    }

    // --------------------------------------
    // Variables - Primitive types - Call by Value
    let a = 'Hello World';
    let b = a; // Only value is copied
    let c = 4;

    console.log(b);
    // => 'Hello World'

    // --------------------------------------
    // Variables - Object types - Call by reference
    {
        let a = [1, 2, 3];
        let b = a;  // Copy the reference
        a[0] = 99;  // Modify the array using the reference

        console.log(b);
        // => [99,2,3]
    }


}