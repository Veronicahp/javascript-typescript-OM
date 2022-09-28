// for in -> lê os índices ou chavez do objeto
const frutas = ['pera', 'maçã', 'uva'];

for (let i in frutas) {
    console.log(frutas[i]);
}

const pessoa = {
    nome: 'Verônica',
    sobrenome: 'Paranhos',
    idade: 42
};

// console.log(pessoa.nome);
// console.log(pessoa['sobrenome']);

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

