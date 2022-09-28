// try {
//     console.log(naoExisto);
// } catch (e) {
//     console.log('naoExisto não existe');
//     console.log(e) // mostra o erro. NÃO FAZER ISSO!
// }

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser números.');
    }
    return x + y;
}
 try {
    console.log(soma(1, 2));
    console.log(soma('1', 2));
 } catch (error) {
   // console.log(error);
   console.log ('Deu ruim!!!')
 }
