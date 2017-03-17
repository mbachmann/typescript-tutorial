/**
 * Created by MBach on 14.03.2017.
 */

export function types() {


    console.log('\n--------------------------------------');
    console.log('types');
    console.log('--------------------------------------');

    // --------------------------------------
    // Types in TypeScript - Variables
    let isDone: boolean = true;
    let size: number = 42;
    let firstName: string = 'Lena' ;
    let attendees: string[] = ['Elias' , 'Anna'];

    // --------------------------------------
    // Types any
    let question: any = 'can be a string';

    question = 6 * 7;
    question = false;

    // --------------------------------------
    // Scoping
    let example = 1;
    if (true) {
        let example = 2;
        console.log('Inside:  ' + example);
    }

    console.log('Outside:  ' + example);
    // => Inside:  2
    // => Outside: 1

    // --------------------------------------
    // Variables with const
    const dateOfBirth = new Date();
    //dateOfBirth = new Date(); // compile error!

    // --------------------------------------
    // const with objects
    const myObject = {
        name: 'Florian' ,
        dateOfBirth: '1985-08-04'
    };

    // Object is mutable!
    myObject.name = 'Andreas' ;

    console.log(myObject);
    // but you cannot change the reference
    //myObject = {name: 'Peter'}; // this throws an error!

}