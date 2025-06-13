/**
 * Created by MBach on 14.03.2017.
 */



export function thisContext(): void {

    console.log('\n--------------------------------------');
    console.log('thisContext');
    console.log('--------------------------------------');

    function greet(this: { name: string }, greeting: string): void {
        console.log(`${greeting}, ${this.name}!`);
    }

    const person = { name: 'Felix Muster' };
    greet.call(person, 'Hello');

    // --------------------------------------
    // Function context
    // this – Arrow Functions
    const outerContext = this;
    const fatArrowFunction = () => this === outerContext;

    console.log(fatArrowFunction()); // ==> true

    // --------------------------------------
    // this – In object
    // this is set to the object itself.
    const myObject: {answer, method} = {
        answer: 42,
        method(): number {
            return this.answer;
        },
    };

    console.log(myObject.method()); // ==> 42

    // --------------------------------------
    // this – In constructors
    // When a function is used as a constructor (with the new keyword), its this is bound to the new object being constructed.
    function MyConstructor(): void  {  this.a = 42;  }
    const myInstance = new MyConstructor();  // this is returned per default
    console.log(myInstance.a);  // ==> 42



}
