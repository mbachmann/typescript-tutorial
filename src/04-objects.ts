/**
 * Created by MBach on 14.03.2017.
 */

export function objects () {


    console.log('\n--------------------------------------');
    console.log('objects');
    console.log('--------------------------------------');


    // --------------------------------------
    // Objects - object creation
    let a = {};
    let b = new Object();


    // --------------------------------------
    // Objects - properties
    const car = {
        make: 'Ford',
        model: 'none'
    };
    car.model = 'Mustang';
    car['year'] = 1969;
    console.log(car);

}
