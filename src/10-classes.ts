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

        constructor(private name: string) {
            this.bornOn = new Date();
        }

        shout(): void {
            this.name = 'Hello';
        }
    }

    // --------------------------------------
    // Classes
    // Class attributes and methods can be public or private.

    class Person2 {
        bornOn: Date; // public by default
        public name: string;
        private _weight: number;
        get weight1(): number {return this._weight};
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
