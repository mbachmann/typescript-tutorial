import {log, logClass, logMethod, logProperty} from "./11-decorators-loggers";
/**
 * Created by MBach on 14.03.2017.
 */


export function decorators(): void {

    console.log('\n--------------------------------------');
    console.log('decorators');
    console.log('--------------------------------------');

    // --------------------------------------
    /**
     * Decorator function tor ES5
     * The constructor function is can be notated as class
     * @param target
     */
    function Robot(target): void {
        target.isRobot = true;
    }

    class Number5{

    }
    Robot(Number5);
    console.log(Number5['isRobot']); // ==> true

    // --------------------------------------
    /**
     * MyRobot Decorator sample with argument
     * @param roboName
     * @returns {(target:any)=>undefined}
     * @constructor
     */
    function MyRobot(roboName) {
        return function(target: any): void {
            target.roboName = roboName;
            target.isRobot = true;
        };
    }

    @MyRobot('Bender')
    class Number6 {

    }

    console.log(Number6['isRobot']); // ==> true
    console.log(Number6['roboName']); // ==> true


    // --------------------------------------
    // add a function and add a method to a class
    // decorator
    function addAndCall(cb: Function, newField: string) {
        // cb is now available in the decorator
        return function(ctor: Function): void {

            Object.defineProperty(ctor.prototype, newField, {
                value: function (...args: any[]) {
                    return Object.defineProperty(this, newField, {

                        value: function(...args: any[]) {
                            console.log(newField, ...args);
                        }

                    })[newField](...args);
                }
            });
            cb(ctor);
        }
    }

    // define a logger as a function
    const callMe = (decoratedCtor) => console.log(decoratedCtor);
    // the decorator gets callMe as a logger function and a new property as myNewProperty
    @addAndCall(callMe, `myNewMethod`)
    class AddToMe {
    }

    let addToMe = new AddToMe();

    // we can assign to the myNewProperty values
    (<any>addToMe).myNewMethod(1, 2);
    const info = {name: 'zhaw', city:'zurich'};
    addToMe['myNewMethod'](info);

    // --------------------------------------
    /**
     * Example with Class Decorator
     * @param constructor
     * @returns {{new()=>{newProperty: string, hello: string}}}
     */
    function classDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
            newProperty = 'new property';
            hello = 'override';

        }
    }

    @classDecorator
    class Greeter {
        property = 'property';
        hello: string;

        constructor(m: string) {
            this.hello = m;
        }
    }

    const greeter: Greeter = new Greeter('world');
    console.log(greeter);


    /**
     * Logging Decorator example
     * source: https://gist.github.com/remojansen/16c661a7afd68e22ac6e
     */

    @log
    class Person {
        public name: string;
        @logProperty
        public surname: string;

        constructor(name: string, surname: string) {
            this.name = name;
            this.surname = surname;
        }

        @log
        public saySomething(something: string, somethingElse: string): string {
            return this.name + ' ' + this.surname + ' says: ' + something + ' ' + somethingElse;
        }

    }

    const p = new Person('Felix', 'Muster');
    p.saySomething('I love playing', 'rock');
    p.surname = 'Mustermann';

}
