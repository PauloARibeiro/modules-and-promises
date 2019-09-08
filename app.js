/* ************************ */
// MODULES
/* ************************ */

import Cat, { sayName, sayColor } from './modules/example-one.js';

const kitty = new Cat('Boss', 'White and orange');

console.log(kitty);
console.log(sayName(kitty));
console.log(sayColor(kitty));

/* ************************ */
// ALIAS IMPORT
/* ************************ */

// import C, { sayName as sayCatName, sayColor as sayCatColor } from './modules/example-one.js';

// const kitty = new C('Boss', 'White and orange');

// console.log(kitty);
// console.log(sayCatName(kitty));
// console.log(sayCatColor(kitty));
