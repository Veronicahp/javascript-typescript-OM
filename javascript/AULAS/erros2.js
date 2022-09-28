// try {
//    //console.log(a);
//    console.log('Abri um arquivo');
//    console.log('Manipulei o arquivo e gerou erro');
//    console.log('Fechei o arquivo');
// } catch (e) {
//     console.log('Tratando o erro');
// } finally {
//     console.log('FINALLY: E seumpre sou executado');
// }

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError("Esperando intância de Date"); 
    }

    if (date) {
        date = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}
try {
    const data = new Date ('O1-01-1970 12:58:12');
    const hora = retornaHora(11);
    console.log(hora);
} catch (error) {
    //trata o erro
    console.log(error)
} finally {
    console.log('Tenha um bom dia');
}

