// Filter retorna sempre um array com o mesmo tamanho ou menos

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22,27];
// const novoArray = numeros.filter(valor => valor > 10);
// console.log(novoArray);

const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Letícia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Walace', idade: 47},

];

const pessoas2 = pessoas.filter(obj => obj.nome.length >= 6);
const pessoas3 = pessoas.filter(obj => obj.idade > 50);
const pessoas4 = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));

console.log(pessoas4)
