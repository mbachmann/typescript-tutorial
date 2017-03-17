import {variables} from "./src/01-variables";
import {types} from "./src/02-types";
import {templateStrings} from "./src/03-template-strrings";
import {objects} from "./src/04-objects";
import {functions} from "./src/05-functions";
import {thisContext} from "./src/06-this";
import {arraysAndIterables} from "./src/07-arrays-and-iterables";
import {higherOrderFunctions} from "./src/08-higher-order-functions";
import {closures} from "./src/09-closures";
import {classes} from "./src/10-classes";
import {decorators} from "./src/11-decorators";
import {destructing} from "./src/12-destructing";

/**
 * Created by MBach on 14.03.2017.
 */

run();

function run() {
    variables();
    types();
    templateStrings();
    objects();
    functions();
    thisContext();
    arraysAndIterables();
    higherOrderFunctions();
    closures();
    classes();
    decorators();
    destructing();

}
