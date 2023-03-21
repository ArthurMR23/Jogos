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

    if (keyCode === UP_ARROW) {
      if (yAtor > 5) {
        yAtor -= 5;
      }
    }
    if (keyCode === DOWN_ARROW) {
      if (yAtor < 366) {
        yAtor += 5;
      }
    }
  }
  
function voltaAtorParaPosicaoInicial() { 
  yAtor = 370;

}

