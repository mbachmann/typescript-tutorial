/**
 * Created by MBach on 14.03.2017.
 */


export function classes () {

    console.log('\n--------------------------------------');
    console.log('classes');
    console.log('--------------------------------------');

    // --------------------------------------
    // Classes
    // Class can have a constructor, attributes and methods.

    class Person {
        bornOn: Date;

        constructor(public name: string) {
            this.bornOn = new Date();
        }

        shout(): void {}
    }

    // --------------------------------------
    // Classes
    // Class attributes and methods can be public or private.

    class Person2 {
        bornOn: Date; // public by default
        public name: string;
        private weight: number;
    }


    // Create new instances with the new keyword.
    const john = new Person('John');

    console.log('John ' + john.bornOn); // => a Date object
    john.shout(); // => nothing but alerts


    // --------------------------------------
    // Classes
    // Inheritance

    class Employee extends Person {
         constructor(name: string, public salary: number) {
            super(name);
             // ...
        }
    }

    // Create new instances with the new keyword.
    const felix = new Employee('Felix',10000);

    console.log('Felix ' + felix.bornOn + ', '+ felix.salary); // => a Date object

}