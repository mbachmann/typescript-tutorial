// npm install rxjs --save


import {interval, Observable, Observer, range} from "rxjs";
import {filter, map, scan} from "rxjs/operators"

console.log(Observable);

let observable = new Observable((observer:Observer<string>) => {

    observer.next('Hello');
    observer.next('Hello Again');
    observer.complete();
});

export function ex05() {

    const source = interval(1000);
    //output: 0,1,2,3,4,5....
    const subscribe = source.subscribe(val => console.log(val));

    pipeToLowerCase(observable);
    pipeToUpperCase(observable);

    // rangeTest();
    subscribe.unsubscribe();
    console.log('end of ex05 result');
}


function pipeToLowerCase(observable: Observable<string>) {
    observable.pipe(
        map((s: string) => s.toLowerCase())
    ).subscribe(s => console.log(s));
}

function pipeToUpperCase(observable: Observable<string>) {
    observable.pipe(
        map((s: string) => s.toUpperCase())
    ).subscribe(s => console.log(s));
}

function rangeTest() {
    const source$ = range(0, 10);

    source$.pipe(
        filter(x => x % 2 === 0),
        map(x => x + x),
        scan((acc, x) => acc + x, 0)
    )
        .subscribe(x => console.log(x))
}

