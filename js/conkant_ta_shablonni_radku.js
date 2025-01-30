/*конкатинація рядків */

const name = 'Lola';
const soName = 'Palola';

const fulName = 'твоє прізвисько' + ' ' + name + ' ' + soName + '.';
console.log (fulName);

/*шаблонні рядки 

!!!!!
У НАХИЛЕНИХ ЛАПКАХ 
!!!!! 

!!!!!
в лапки можна вставити формулу 
!!!!!!
*/

const name2 = 'Lola';
const soName2 = 'Palola';

const fulName2 = `твоє прізвисько ${name2} ${soName2}.`;
console.log (fulName2);


const name3 = 'Lola';
const soName3 = 'Palola';

const fulName3 = `твоє прізвисько ${name3+soName3 + 120+5} СМ.`;
console.log (fulName3);
