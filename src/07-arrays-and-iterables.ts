/**
 * Created by MBach on 14.03.2017.
 */


export function arraysAndIterables(){


    console.log('\n--------------------------------------');
    console.log('arraysAndIterables');
    console.log('--------------------------------------');

    // --------------------------------------
    // Arrays are ordered – objects not!
    const a = ['a','b'];
    console.log(a[0]);  // a

    // --------------------------------------
    //Arrays - Iterators
    var names = ['Hanni', 'Nanni'];

    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }

    for (let name of names) {
        console.log(name)
    }

    // --------------------------------------
    // Array.forEach()

    const myArray = [1,2,3,4,5];
    myArray.forEach(elem => console.log(elem));


    // --------------------------------------
    // Arrays - Transformations
    // Array.map()
    const numbers = [1, 2, 3, 4, 5];
    const squared = numbers.map(num => num * num);  // Transforming an array
    // squared is [1, 4, 9, 16, 25]
    console.log(squared);


    // --------------------------------------
    // Array.filter()
    const numbers2 = [1, 2, 3, 4, 5];
    const filtered = numbers2.filter(num => num < 3);   // Filtering an array
    // filterd is [1, 2]




}