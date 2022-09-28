const paragrafos = document.querySelector('.paragrafos');
const ps = document.querySelectorAll('p');

const estiloBody = getComputedStyle(document.body); //aqui a gente pega todos os estilo do CSS
const bkgColorBody = estiloBody.backgroundColor; // aqui apenas a cor do body
console.log(bkgColorBody);

for (let p of ps) {
    p.style.backgroundColor = bkgColorBody;
    p.style.color = 'white';
    p.style.fontSize = '1em';
    p.style.fontWeight = 'bold';
    p.style.display = 'block';
    p.style.margin = '0 auto';
    p.style.padding = '0 auto';
    p.style.textDecoration = 'none';
    
}



