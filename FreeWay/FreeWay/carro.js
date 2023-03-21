//Variáveis dos carros

let xCarros = [345, 345, 345, 345, 345, 345]; //X dos carros, seria onde os carros começam, o ponto de partida.
let yCarros = [40, 95, 150, 210, 262, 318] //Y dos carros seria a altura que ele ficam na janela, sendo na ordem dos carros, de cima para baixo.  
let alturaCarro = 50; //Altura declarada do carro, assim não fica grande.
let larguraCarro = 40; //Largura dos carros, para não passar das faixas pelas laterais. 
let velocidadeCarros = [/*Antes da linha amarela*/ 2, 2.5, 3.2, /* Depois da linha amarela*/ 5, 3.3, 2.3]; //Velocidade dos carros, começando de cima para baixo.
let colisao = false; //Já informa que o valor e falso, para ser ativado.

//Função para desenhar o carro

function mostraCarro() {
  for (i = 0; i < imagemCarros.length; i++) {
    image(imagemCarros[i], xCarros[i], yCarros[i], alturaCarro, larguraCarro); //Imagem do carros, onde alterei os valores pelas variáveis
  }
}

//Função para mover o carro

function movimentaCarro() {
  for (let i = 0; i < imagemCarros.length; i++) { //Estrutura de repetição, declarado se for menor que váriavel, repetir mais 1 vez.  
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    if (passouTodaATela(xCarros[i])) {
      xCarros[i] = width;
    }
  }
}

function passouTodaATela(xCarros) {
  return xCarros < - 50;
}

function verificaColisao() {
  for (let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], alturaCarro, larguraCarro, xAtor, yAtor, 30);
    if (colisao) {
      voltaAtorParaPosicaoInicial();
      tiraPonto();
    }
  }
  verificaPosicao();
}


