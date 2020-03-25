

extest();

interface IFruitSalad {
    apple: (msg: string) => string;
    pear: () => number;
    kiwi: any;
}

function extest() {

    const fruitSalads: Array<IFruitSalad> = [{
            apple: (msg: string): string => {
                console.log('apple' + msg);
                return 'return from apple'
            },
            pear: (): number => {
                return 2;
                },
            kiwi: 'I am from Australia'
        }, {
            apple: (msg: string): string => {
                console.log('apple 2' + msg);
                return 'return from apple'
            },
            pear: (): number => {
                return 2;
            },
            kiwi: 'I am from Israel'
        }

        ]
    ;
    // console.log (fruitSalad.apple('hallo'));
    // console.log (fruitSalad.pear());

    // console.log (JSON.stringify(fruitSalad));
    fruitSalads.forEach(fruitSalad => {

        fruitSalad.kiwi = () => 'i am now a new return from kiwi';

        Object.values(fruitSalad).forEach((el) => {
            if ( typeof el === 'string'){
                console.log(el);
            } else if ( typeof el === 'function') {
                console.log(el('hallo'));
            }

        });


    });
    // console.log(Object.keys(fruitSalad));


}
