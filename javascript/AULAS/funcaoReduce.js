// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const total = numeros.reduce(function(acc, valor, indice, array) {
//     acc += valor;
//     return acc;
// }, 0);

// const total = numeros.reduce(function(acc, valor, indice, array) {
//     if(valor % 2 === 0) acc.push(valor);
//     return acc;
// }, []);
// console.log(total);

const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Letícia', idade: 10},
    { nome: 'Rosana', idade: 64},
    { nome: 'Walace', idade: 47},

];

const maisVelha = pessoas.reduce(function(acc, valor) {
    if(acc.idade > valor.idade) return acc;
    return valor;
});

console.log(maisVelha);

