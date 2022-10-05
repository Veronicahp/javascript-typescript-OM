const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Letícia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Walace', idade: 47},

];

const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => ({ idade: obj.idade}))
const id = pessoas.map(function(obj, indice){
    const newObj = {...obj} // criamos um novo objeto para não modificar o objeto original
    newObj.id = (indice + 1);
    return newObj;
});

console.log(id);