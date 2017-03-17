/**
 * Created by MBach on 14.03.2017.
 */


export function closures () {

    console.log('\n--------------------------------------');
    console.log('closures');
    console.log('--------------------------------------');

    // --------------------------------------
    // Closures

    let createFunction = function() {
        let localVar = 123;

        return function() {
            return localVar + 10;
        };
    };

    // --------------------------------------
    // Closures
    // higher order functions and closures in combination

    let addTen = createFunction();
    console.log(addTen()); // 133


    let createLogger = function(loggerName) {
        return function(msg) {
            console.log('[' + loggerName + '] ' + msg);
        };
    };

    let info = createLogger('INFO');

    info('User successfully logged in!');
    // [INFO] User successfully logged in!

}