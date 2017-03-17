/**
 * Created by MBach on 14.03.2017.
 */


export function destructing () {

    console.log('\n--------------------------------------');
    console.log('destructing');
    console.log('--------------------------------------');

    // --------------------------------------
    // Destructinmg
    // Get multiple local variables from an object with destructuring.

    let circle = {radius: 10, x: 140, y: 70};
    let {x, y} = circle;

    console.log(x, y)
    // => 140, 70

    // --------------------------------------
    // Destructinmg
    // Get multiple local variables from an object with destructuring.

    let coords = [51, 6];
    let [lat, lng] = coords;

    console.log(lat, lng)
    // => 51, 6
}