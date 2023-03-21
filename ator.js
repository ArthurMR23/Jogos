//Váriaveis do ator
let xAtor = 85;
let yAtor = 366;
let colisao = false;

//Função com os dados do ator
function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

//Função para movimentar ator para cima e para baixo
function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      yAtor += 3;
    }
  }
}

//Função para verificar colisão do carro no ator
function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      voltaAtorParaPosicaoInicial();
      somDaColisao.play();
      if (pontosMaiorQueZero()){
        meusPontos -= 1;
      }
    }
  }
}

//Função para o ator voltar para sua pocição inicial
function voltaAtorParaPosicaoInicial(){
  yAtor = 366;
}

//Função para o ator não descer mais que sua pocição inicial
function podeSeMover(){
  return yAtor < 366;
}






