const moment = require('moment');

let cumple = moment([1997, 11, 25]);
let actual = moment();
let anios = actual.diff(cumple, 'years');
let dias = actual.diff(cumple, 'days');

console.log("Hoy es", actual.format('L'));
console.log("Nací el", cumple.format('L'));
console.log(`Desde mi nacimiento han pasado ${anios} años`);
console.log(`Desde mi nacimiento han pasado ${dias} días`);