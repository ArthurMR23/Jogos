//Váriaveis das regras 

let meusPontos = 0;
let lugarDoZero = 80;
let alturaDoZero = 25;
let tamanhoDoZero = 20;


function incluiPontos() {
    text(meusPontos, lugarDoZero, alturaDoZero);
    textSize(tamanhoDoZero);
    textAlign(CENTER);
    fill(color("#ffcc00"));
}

function marcaPonto() {
    if (yAtor < 23) {
        meusPontos++;
      voltaAtorParaPosicaoInicial();  
    }    
}

function tiraPonto(){ 
    if(colisao & meusPontos > 0) {
        meusPontos--;
    }
    }