// Higher order functions

export function ex03() {

    const double = x => x * 2;
    const half = x => x / 2;
    const twoMore = ((num: number, calculateANumber: (n:number) => number): number => {
        return calculateANumber(num) + 2;
    });

    const getDouble = ((): (n:number) => number =>  {
        return double;
    });


    console.log("TWO MORE F", twoMoreF(4, getDoubleF()));
    console.log("TWO MORE F", twoMoreF(4, halfF));


    console.log("TWO MORE", twoMore(4, getDouble()));
    console.log("TWO MORE", twoMore(4, half));


    function twoMoreF(num: number, calculateANumber: (n:number) => number):number {
        return calculateANumber(num) + 2;
    }

    function doubleF(n:number):number {
        return n*2;
    }

    function halfF(n:number):number {
        return n/2;
    }

    function getDoubleF(): (n:number) => number {
        return doubleF;
    }
    console.log('end of ex03 result');

}



