const elementos = [
    {tag: 'p', texto: 'Qualquer texto criado'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'section', texto: 'Frase 3'},
    {tag: 'footer', texto: 'Frase 4'},
];

const container = document.querySelector('.container'); // serve para selecionar um elemento
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i]; //desestruturacao
    let tagCriada = document.createElement(tag);  //aqui criamos as tags
    let textoCriado = document.createTextNode(texto); // aqui criamos os textos

    tagCriada.appendChild(textoCriado); // aqui colocamos o texto dentro da tag
    div.appendChild(tagCriada); // aqui colocamos a tag dentro da div
}

container.appendChild(div);


