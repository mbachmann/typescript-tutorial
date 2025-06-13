/**
 * Created by MBach on 14.03.2017.
 */

export function templateStrings(): void {

    console.log('\n--------------------------------------');
    console.log('templateStrings');
    console.log('--------------------------------------');

    // --------------------------------------
    // Strings – Template string
    // Variables in strings (multiline support)
    const name = 'Felix Muster';
    const temp = `My name is ${name}`;   // Backtick
    console.log(temp);

    const multiLine = `Multi-line:
                       My name
                       is ${name}`;
    console.log(multiLine);

}
