

// ex01.d
export interface IFruitSalad {
    apple: (msg: string) => string;
    pear: () => number;
    kiwi: any;
}

// ex 01.a
export function ex01() {
    console.log('ex01 result');

    // ex01.b
    let fruitSalads: Array<IFruitSalad> = [
        {
            apple: (msg: string): string => {
                let tmp = 'apple: ';
                console.log(tmp + msg);
                return 'return from apple';
            },
            pear: (): number => {
                console.log('pear');
                return 2;
            },
            kiwi: 'from Australia'
        }
    ];


    // for (let testObject of testObjects) {

    fruitSalads.forEach ((fruitSalad) => {

        Object.values(fruitSalad).forEach(el => {
            if (typeof el === 'string') {
                console.log(el);
            }
            else if (typeof el === 'function') {
                console.log(el('hallo'));
            }
        });

        // ex 01.b
        // test01 is show as a code string
        console.log('content of apple: ' + fruitSalad.apple);
        // test01 is show as an object
        console.log(fruitSalad.apple);
        // test01 function is called
        console.log(fruitSalad.apple('hello world'));
        // ex 01.c
        // test01 function is called

        console.log(fruitSalad.pear());

        console.log(fruitSalad.kiwi);
        fruitSalad.kiwi = 'hello world';
        console.log(fruitSalad.kiwi);

        // ex01.d
        fruitSalad.kiwi = () => {
            return 'i am now a new return from kiwi';
        };

        console.log(fruitSalad.kiwi);
        console.log(fruitSalad.kiwi());
        console.log('end of ex01 result');

    });

}
