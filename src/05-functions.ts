/**
 * Created by MBach on 14.03.2017.
 */


export function functions(): void{


    console.log('\n--------------------------------------');
    console.log('functions');
    console.log('--------------------------------------');

    // --------------------------------------
    // “First-class citizens”, functions are just expressions
    const go = function(): void { alert('Hello JavaScript'); };

    console.log (go);


    // --------------------------------------
    // Functions are also objects
    const fn1= function(): void {
        window.alert('Hello JavaScript');
    };
    fn1['foo'] = 'bar';
    fn1['zhaw'] = 'ase';
    console.log (fn1);

    // --------------------------------------
    // JavaScript has both, named and anonymous functions.
    function namedFunction(): void {
        console.log('named function');
    }

    const anonymousFunction = function(): void {
        console.log('anonymous function.');
    };

    namedFunction();
    anonymousFunction();

    // --------------------------------------
    // Add types to functions arguments and return values
    function sayHi(firstName: string): void {
        console.log(firstName);
    }

    sayHi('Felix');

    // --------------------------------------
    // Parameter can be optional. Use a question mark.
    function buildName(firstName: string, lastName?: string): string {
        if (lastName) {
            return firstName + ' ' + lastName;
        } else {
            return firstName;
        }
    }

    console.log(buildName('Felix') + '; ' + buildName('Max', 'Mustermann'));


    // --------------------------------------
    // Functions – Optional parameters
    // Function arguments can have defaults for arguments.

    function buildName2(firstName: string, lastName = 'Muster'): string {
        // type Inference: lastName is a string
        return firstName + ' ' + lastName;
    }
    console.log(buildName2('Felix'));

    // Functions – Rest/Spread parameter
    // An abitrary amout of parameters can be stored in an array.
    function buildName3(firstName: string, ...restOfNames: string[]): string {

        const allNames = [firstName, ...restOfNames];
        // names = [firstName, restOfName[0], restOfName[1] ...]

        return allNames.join(' ');
    }

    console.log(buildName3('Felix', 'Muster', 'Max','Mustermann'));


    // --------------------------------------
    // fat arrow
    // Implicit return without a block
    const square = (n: number) => n * n;
    // var square = function (n) { return n * n; };
    console.log(square(2));


    // --------------------------------------
    // Functions- Fat-Arrow-Function
    // Use braces around arguments if you have multiple parameters.
    const sum = (a, b) => a + b;
    // var sum = function (a, b) { return a + b; };
    console.log(sum(2, 3));


    // --------------------------------------
    // Use curly braces and return if you have multiple lines
    const even = (n: number) => {
        const rest = n % 2;
        return rest === 0;
    };

    // var even = function(n) {
    //   var rest = n % 2;
    //   return rest === 0;
    // };

    console.log(even(3));
    console.log(even(4));





}
