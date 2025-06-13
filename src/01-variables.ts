/**
 * Created by MBach on 14.03.2017.
 */

export function variables(): void {

    console.log('\n--------------------------------------');
    console.log('variables');
    console.log('--------------------------------------');

    // --------------------------------------
    // Variables - Declaration
    let value;
    const pi = 3.1416;
    let $value__123;

    // --------------------------------------
    // Variables - Fun fact
    let ಠ_ಠ = Math.PI;
    console.log(ಠ_ಠ);


    // --------------------------------------
    // Variables - hold the result of an expression
    const todayIs = 'Today is: ';

    const helloFunction = function(): string {
        return todayIs;
    };

    const returnValue: Date = getCurrentDate();

    console.log(helloFunction() + ' ' + returnValue);

    function getCurrentDate(): Date {
        return new Date();
    }

    // --------------------------------------
    // Variables - Primitive types - Call by Value
    let a = 'Hello World';
    let b = a; // Only value is copied
    a = '4';

    console.log(b);
    // => 'Hello World'

    // --------------------------------------
    // Variables - Object types - Call by reference
    {
        // tslint:disable-next-line:no-shadowed-variable
        const a: number[] = [1, 2, 3];
        const b: number[] = a;  // Copy the reference
        a[0] = 99;  // Modify the array using the reference

        console.log(b);
        // => [99,2,3]
    }

}
