const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li') //criando a tag <li> no html
    return li;
}

inputTarefa.addEventListener('keypress', function(e){ // evento para criar um tarefa quando o Enter for pressionado.
    if(e.keyCode === 13) { //codigo da tecla Enter
        if (!inputTarefa.value) return; 
        criarTarefa(inputTarefa.value)
    }
})

function limpaImput() {
    inputTarefa.value = ''; //apos criar a tarefa o input fica zerado
    inputTarefa.focus(); // e aqui o cursor volta pro começo do input para digitarmos outra tarefa
    
}

function criaBotaoApagar(li) {
    li.innerText += '  '; //cria espaço entre a tarefa e o botão
    const botaoApgar = document.createElement('button'); // aqui eu crio o botão que será add a uma tag <li>
    botaoApgar.innerHTML = 'Apagar' //aqui eu add o texto no botão
    botaoApgar.setAttribute('class', 'apagar'); //cria uma class dentro do button
    botaoApgar.setAttribute('title', 'Apagar essa tarefa'); 
    li.appendChild(botaoApgar);
}

function criarTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li); //aqui eu add o que foi digitado a uma lista direto no html
    limpaImput(); //aqui eu chamo a funcao para limpar o imput
    criaBotaoApagar(li);
    salvarTarefas();
}


btnTarefa.addEventListener('click', function(){  // aqui eu capturo o que foi clicado. Se estiver vazio, não será capturado.
    if (!inputTarefa.value) return; 
    criarTarefa(inputTarefa.value) // o valor capturado será adicionado nessa funcao.
});

document.addEventListener('click', function(e){
    const el = e.target;

    if (el.classList.contains('apagar')) {
        el.parentElement.remove(); // remove o 'pai' do butão apagar (li) e ele incluído.
        salvarTarefas();
    }
});

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li'); // evento para capturar todas as li da class tarefas
    
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText; //captura o texto da tarefa junto com o botão
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); // apagando o texto "Apagar"
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON); 
}

function adicinaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas); // converte o elemento de volta para JS

    for (tarefa of listaDeTarefas){
        criarTarefa(tarefa);
    }
}

adicinaTarefasSalvas();






