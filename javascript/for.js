for (let i = 500; i <= 600; i+=10) {
    console.log(i);
}

for (let i = 500; i >= 400; i-=10) {
    console.log(i);
}

for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0;
    console.log(i, par);
}

const frutas = ['Maçã', 'Pera', 'Uva', 'Pêssego', 'Manga', 'Goiada'];
for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i}`, frutas[i]);
}
