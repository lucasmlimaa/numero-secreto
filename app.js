let listaNumerosSorteados = [];
let numeroMaximo  = 10;
let numeroSecreto = geraNumeroAleatorio();
let numeroTentativas = 0;

function geraNumeroAleatorio(){
    let numeroSorteado =  parseInt(Math.random() * numeroMaximo + 1);
    let qtdElementosLista = listaNumerosSorteados.length;

    if (qtdElementosLista == numeroMaximo) {
        listaNumerosSorteados = [];
    }

    if (listaNumerosSorteados.includes(numeroSorteado)){
        return geraNumeroAleatorio();
    }
    listaNumerosSorteados.push(numeroSorteado);
    return numeroSorteado;
}

function exibirTextoNaTela (tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function limpaCampo(){
    let campo = document.querySelector('input');
    campo.value = '';
}

function ToogleBotaoReiniciar(){
    let botaoAtivar = document.querySelector('#reiniciar');
    if (botaoAtivar.disabled){
        botaoAtivar.disabled = false;
    } else {
        botaoAtivar.disabled = true;
    }
    
}

function reiniciarJogo(){
    numeroSecreto = geraNumeroAleatorio();
    numeroTentativas = 0;
    limpaCampo();
    exibirMensagemInicial();
    ToogleBotaoReiniciar();

}

function verificarChute(){
    numeroTentativas++;
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1','Você Acertou!');
        let tentativa = numeroTentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagem = `Você descobriu o número secreto com ${numeroTentativas} ${tentativa}`;
        exibirTextoNaTela('p',mensagem);
        ToogleBotaoReiniciar();
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p','O número secreto é menor');
        } else {
            exibirTextoNaTela('p','O número secreto é maior');
        }
        limpaCampo();

    }
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1','Jogo do numero secreto!');
    exibirTextoNaTela('p','Digite um número entre 1 e 10');
}

exibirMensagemInicial();






