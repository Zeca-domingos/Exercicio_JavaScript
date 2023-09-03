var jogador = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var quadrados = document.getElementsByClassName('quadrado'); 

mudarJogador('x');

function escolherQuadrado(id){
    
    var quadrado = document.getElementById(id);
    if(quadrado.innerHTML !== '-' ){
        return;
    }


    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';

    if(jogador === 'x'){
        jogador = 'o';
    }else {
        jogador = 'x';
    }

    mudarJogador(jogador);
}

function mudarJogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checaVencedor(){
     
}