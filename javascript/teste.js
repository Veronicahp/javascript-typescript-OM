var indices = [];
var array = ['a', 'b', 'bac', 'c', 'a', 'd'];
var elemento = 'a';
var idx = array.indexOf(elemento);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(elemento, idx + 1);
}
console.log(indices);

// let peso = 0
// let altura = 0
// const imc = peso * peso / altura

// function imc () {
//     if (imc > 18,5;) {
//         console.log("Abaixo do peso");
//     } else if (imc > 18,5 && imc < 24,9) {
//         console.log("Peso normal");
//     } else if (imc > 25 && imc < 29,9) {
//         console.log("Sobrepeso");
//     } else if (imc > 30 && imc < 34,9) {
//         console.log("Obesidade grau 1");
//     } else if (imc > 35 && imc < 39,9) {
//         console.log("Obesidade grau 2");
//     } else if (imc > 40) {
//         console.log("Obesidade grau 3");
//     }
// }