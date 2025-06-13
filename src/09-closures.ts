/**
 * Created by MBach on 14.03.2017.
 */


export function closures(): void {

    console.log('\n--------------------------------------');
    console.log('closures');
    console.log('--------------------------------------');

    // --------------------------------------
    // Closures

    const createFunction = function(): () => number {
        const localVar = 123;

        return function(): number {
            return localVar + 10;
        };
    };

    // --------------------------------------
    // Closures
    // higher order functions and closures in combination

    const addTen = createFunction();
    console.log(addTen()); // 133


    const createLogger = function(loggerName: string): (msg: string) => void {
        return function(msg: string): void {
            console.log('[' + loggerName + '] ' + msg);
        };
    };

    const info = createLogger('INFO');

    info('User successfully logged in!');
    // [INFO] User successfully logged in!

}
