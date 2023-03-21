//Variáveis da vaquinha

let xAtor = 35;
let yAtor = 370;
let alturaAtor = 27;
let larguraAtor = 27;

//Função para desenhar a vaquinha

function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, alturaAtor, larguraAtor);
}

//Função para mover a vaquinha

function movimentaAtor() {

  if (keyIsDown(UP_ARROW)) { // Mover para cima 
    yAtor -= 3;
    
  }

  if (keyIsDown(DOWN_ARROW)) { // Mover para baixo
    yAtor += 3;
  }
}


function voltaAtorParaPosicaoInicial() { 
  yAtor = 370;

}

