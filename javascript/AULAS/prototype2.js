//new Object -> Object.prototype
// const ObjA = {
//     chaveA: A
// };

// const ObjB = {
//     chaveB: B
// };

// const ObjC = new Object();
// ObjC.chaveC = 'C';

// Object.setPrototypeOf(ObjB, ObjA);
// console.log(objB.chaveA);

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100))
}

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
}

const p1 = new Produto('Camiseta', 50);
const p2 = {
    nome: 'Caneta',
    preco: 15
};
Object.setPrototypeOf(p2, Produto.prototype); //aqui a gente seta o prototype do objeto Produto para o p2 que criamos literalmente.

p2.aumento(10)

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 99
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
});

console.log(p1);
console.log(p2);
console.log(p3);