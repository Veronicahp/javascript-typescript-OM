const nome = ['Verônica', 'Holanda', 'Paranhos'];

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

for (let i in nome) {   // serve para pegar o indice, além do valor
    console.log(nome[i]);
}

for (let valor of nome) {  // serve para pegar só o valor
    console.log(valor);
}

nome.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
});


/* 
For clássico  - Geralmente com iteráveis (arrays ou string)
For in - Retorna o índice ou chave (string, array ou objetos)
For of - Retorna o valor em si (iteráveis, string ou array)    
*/
