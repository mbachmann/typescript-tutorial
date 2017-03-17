/**
 * Created by MBach on 14.03.2017.
 */

export function thisContext() {

    console.log('\n--------------------------------------');
    console.log('thisContext');
    console.log('--------------------------------------');

    // --------------------------------------
    // Global context
    // In a global execution context (outside of any function), this refers to the global object. In browsers this is window.
    this.myTest = 42
    //window['myTest2'] = 22; //(in node.js not possible)
    console.log(this.myTest) // 42
    //console.log(window['myTest2']) // 42 (in node.js not possible)
    //this === window // true (in node.js not possible)

    // --------------------------------------
    // Function context
    // this – Arrow Functions
    const outerContext = this;
    const fatArrowFunction = () => this === outerContext;

    console.log(fatArrowFunction()); // ==> true

    // --------------------------------------
    // this – In object
    // this is set to the object itself.
    let myObject = {
        answer: 42,
        method: function() {
            return this.answer;
        }
    };

    console.log(myObject.method()); // ==> 42

    // --------------------------------------
    // this – In constructors
    // When a function is used as a constructor (with the new keyword), its this is bound to the new object being constructed.
    function MyConstructor()  {  this.a = 42  }
    const myInstance = new MyConstructor();  // this is returned per default
    console.log(myInstance.a);  // ==> 42



}