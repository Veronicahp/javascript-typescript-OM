
falaOi(); // pode ser chamada antes ou depois da criacao da funcao
function falaOi () {
    console.log('Oie');   //só quando a funcao é declarada assim ela sofre hosting
}

//First class objects (objetos de primeira classe)
// function expression
const souUmDado = function () {  //podemos colocar um funcao em uma variavel e recebe-la como parametro
    console.log('Sou um dado.');
}

function executaFuncao(funcao) {
    funcao();
}

executaFuncao(souUmDado); //uma funcao executando outra

//Arrow function

const funcaoArrow = () => {
    console.log('Sou uma arrow function');
}
funcaoArrow();

//Dentro de um objeto

const obj = { 
    falar (){
        console.log('Estou falando...');
    }
};

obj.falar();
