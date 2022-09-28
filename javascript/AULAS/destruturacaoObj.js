const pessoa = {
    nome: "Verônica",
    sobrenome: "Paranhos",
    idade : 42,
    endereco: {
        rua: 'Elisa da Fonseca',
        numero: 93
    }
};

//const { nome: teste, sobrenome, endereco } = pessoa; // atribuição via desestruturacao
//console.log(teste, sobrenome);
//const {endereco } = pessoa
//console.log(endereco)

const { nome, sobrenome, ...rest } = pessoa;
console.log(nome, sobrenome, rest);


