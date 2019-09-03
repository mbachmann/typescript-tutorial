// npm i moment --save
// npm i @types/moment --save-dev


import * as moment from 'moment';

export function ex02() {
    // ex 01.e
    const date = new Date();
    console.log(date);
    let localeDateString = new Date(date).toLocaleDateString('de');
    console.log(localeDateString);

    let dateobj = new Date();

    function pad(n) {
        return n < 10 ? "0" + n : n;
    }
    let result = pad(dateobj.getDate()) + "." + pad(dateobj.getMonth() + 1) + "." + dateobj.getFullYear();
    console.log(result);

    // ex 01.f
    // https://momentjs.com/timezone/docs/
    moment.locale('de');
    // let value = "2019-09-04 10:00:00";
    let value = "2019-09-04T10:00:00Z";
    const dateLocale: moment.Moment = moment.utc(value).local();
    console.log(dateLocale.toDate());
    // const dateLocale = moment.utc(value).local();
    console.log(dateLocale.format("lll"));
    console.log('end of ex02 result');
}
