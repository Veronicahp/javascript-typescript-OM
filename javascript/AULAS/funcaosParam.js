function funcao () { 
    console.log('Oie');
    console.log(arguments);
} 
funcao(1, 2, 3, 4, 5, 6, 7); // os parâmetros passados aqui vão para os "arguments" da funcao.


function argumento (a, b, c) {
    let total = 0;
    for (let argumento of arguments) { 
        total += argumento;
    }

    console.log(total, a, b, c);
}
argumento(1, 2, 3, 4, 5, 6, 7);

function padrao(a, b = 2) { //aqui colocamos o valor padrao para b, caso não seja enviado na chamada da funcao.
    console.log(a + b)
}

padrao(2); 

//arguments não funcionam com arrow function. Se precisar de parametros indeterminados usamos rest(...)