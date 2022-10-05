
const { texto } = require('./base');

const regExp1 = /a/gi;
const novoArray = texto.match(regExp1);

console.log(novoArray);


//console.log(texto.replace(/João/gi, 'Felipe'));
// console.log(texto.replace(/(João|Maria)/gi, function(input) {
//   return ' ############## ' + input.toUpperCase() + ' ############## ';
// }));
//console.log(texto.replace(/(João)/gi, '<b>$1</b>')); //para usar $ a palavra sempre tem que estar entre parênteses
