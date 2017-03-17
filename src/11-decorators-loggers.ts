/**
 * Created by MBach on 14.03.2017.
 * Decorators are still experimental
 * source: https://gist.github.com/remojansen/16c661a7afd68e22ac6e
 * description
 * http://blog.wolksoftware.com/decorators-reflection-javascript-typescript
 *
 */

/**
 *  Decorator helper function for class, property, method and parameter logging
 * @param args
 * @returns {any}
 */

export function log(...args : any[]) {

    switch(args.length) {
        case 1:
           return logClass.apply(this, args);
        case 2:
            return logProperty.apply(this, args);
        case 3:
            if(typeof args[2] === "number") {
                return logParameter.apply(this, args);
            }
            return logMethod.apply(this, args);
        default:
            throw new Error();
    }

}

/**
 * Decorator function for parameter logging
 * @param target The prototype of the class
 * @param key    The name of the property.
 * @param index  The index of parameter in the list of the function's parameters (number).
 */
function logParameter(target: any, key : string, index : number) {

    var metadataKey = `__log_${key}_parameters`;
    if (Array.isArray(target[metadataKey])) {
        target[metadataKey].push(index);
   }
   else {
       target[metadataKey] = [index];
   }
}

/**
 * Decorator function for property logging
 * @param target The prototype of the class
 * @param key The name of the property.
 */

export function logProperty(target: any, key: string) {
    // property value
    var _val = target[key];

    // property getter
    var getter = function () {
        console.log(`Get: ${key} => ${_val}`);
        return _val;
    };
    // property setter
    var setter = function (newVal) {
        console.log(`Set: ${key} => ${newVal}`);
        _val = newVal;
   };

    // Delete property.
    if (delete target[key]) {
        // Create new property with getter and setter
       Object.defineProperty(target, key, {
           get: getter,
           set: setter,
           enumerable: true,
           configurable: true
        });
    }
}


/**
 *
 * @param target The prototype of the class
 * @param key The name of the method (string | symbol).
 * @param descriptor The property descriptor
 * @returns {any} returns edited descriptor as opposed to overwriting the descriptor
 */
export function logMethod(target, key, descriptor) {
    // save a reference to the original method this way we keep the values currently in the
    // descriptor and don't overwrite what another decorator might have done to the descriptor.
    if(descriptor === undefined) {
        descriptor = Object.getOwnPropertyDescriptor(target, key);
    }
    var originalMethod = descriptor.value;
    //editing the descriptor/value parameter
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }

        var a = args.map(function (a) { return JSON.stringify(a); }).join();
        // note usage of originalMethod here
        var result = originalMethod.apply(this, args);
        var r = JSON.stringify(result);
        console.log("Call: " + key + "(" + a + ") => " + r);
        return result;

    };
    // return edited descriptor as opposed to overwriting the descriptor
    return descriptor;

}


/**
 * Decorator function for class logging
 * @param target
 * @returns {any}
 */
export function logClass(target: any) {
    // save a reference to the original constructor
    var original = target;
    // a utility function to generate instances of a class
    function construct(constructor, args) {
        var c : any = function () {
            return constructor.apply(this, args);
        }
        c.prototype = constructor.prototype;
        return new c();
    }

    // the new constructor behaviour
    var f : any = function (...args) {
        console.log("New: " + original.name + ' Params: ' + args);
        return construct(original, args);
    }

    // copy prototype so intanceof operator still works
    f.prototype = original.prototype;
    // return new constructor (will override original)
    return f;
}
