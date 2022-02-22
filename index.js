let jogador, vencedor = null;
let jogadorSelecionado = document.getElementById('jogadorSelecionado');
let vencedorSelecionado = document.getElementById('vencedorSelecionado');
mudaJogador('X');
function escolherQuadrado (id) {
    if (vencedor !== null) {
        return;
    }
    let quadrado = document.getElementById(id);
    if (quadrado.innerText !== '-') {
        return;
    }
    quadrado.innerText = jogador;
    quadrado.style.color = '#000';
    if (jogador === 'X') {
        jogador = 'O';
    } else {
        jogador = 'X';
    }
    mudaJogador(jogador);
    checaVencedor();
}
function mudaJogador (valor) {
    jogadorSelecionado.innerText = valor;
    jogador = valor;
}
function checaVencedor () {
    let quadrado1 = document.getElementById('1');
    let quadrado2 = document.getElementById('2');
    let quadrado3 = document.getElementById('3');
    let quadrado4 = document.getElementById('4');
    let quadrado5 = document.getElementById('5');
    let quadrado6 = document.getElementById('6');
    let quadrado7 = document.getElementById('7');
    let quadrado8 = document.getElementById('8');
    let quadrado9 = document.getElementById('9');
    
    if (checaSequencia(quadrado1, quadrado2, quadrado3)) {
        mudaCorQuadrado(quadrado1, quadrado2, quadrado3);
        mudaVencedor(quadrado1)
    }
    if (checaSequencia(quadrado4, quadrado5, quadrado6)) {
        mudaCorQuadrado(quadrado4, quadrado5, quadrado6);
        mudaVencedor(quadrado4)
    }
    if (checaSequencia(quadrado7, quadrado8, quadrado9)) {
        mudaCorQuadrado(quadrado7, quadrado8, quadrado9);
        mudaVencedor(quadrado7)
    }
    if (checaSequencia(quadrado1, quadrado4, quadrado7)) {
        mudaCorQuadrado(quadrado1, quadrado4, quadrado7);
        mudaVencedor(quadrado1)
    }
    if (checaSequencia(quadrado2, quadrado5, quadrado8)) {
        mudaCorQuadrado(quadrado2, quadrado5, quadrado8);
        mudaVencedor(quadrado2)
    }
    if (checaSequencia(quadrado3, quadrado6, quadrado9)) {
        mudaCorQuadrado(quadrado3, quadrado6, quadrado9);
        mudaVencedor(quadrado3)
    }
    if (checaSequencia(quadrado3, quadrado5, quadrado7)) {
        mudaCorQuadrado(quadrado3, quadrado5, quadrado7);
        mudaVencedor(quadrado3)
    }
    if (checaSequencia(quadrado1, quadrado5, quadrado9)) {
        mudaCorQuadrado(quadrado1, quadrado5, quadrado9);
        mudaVencedor(quadrado1)
    }
}
function mudaVencedor (quadrado) {
    vencedor = quadrado.innerText;
    vencedorSelecionado.innerText = vencedor;
    jogadorSelecionado.innerText = null;
}
function mudaCorQuadrado (quadrado1, quadrado2, quadrado3) {
    quadrado1.style.background = '#0f8';
    quadrado2.style.background = '#0f8';
    quadrado3.style.background = '#0f8';
}
function checaSequencia (quadrado1, quadrado2 , quadrado3) {
    let igual = false;
    if (quadrado1.innerText !== '-' && quadrado1.innerText === quadrado2.innerText && quadrado2.innerText === quadrado3.innerText) {
        igual = true;
    }
    return igual;
}
function reiniciar () {
    vencedor = null;
    vencedorSelecionado.innerText = '';

    for (let i = 1; i <= 9; i++) {
        let quadrado = document.getElementById(i);
        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';

        quadrado.innerText = '-';

    }
    mudaJogador('X');
}