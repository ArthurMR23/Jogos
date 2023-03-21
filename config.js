//Váriaveis do jogo em geral
let meusPontos = 0;

function incluiPontos(){
    textAlign(CENTER);
    textSize(25);
    fill(color(255, 240, 60))
    text(meusPontos, width / 5, 27);
  }

//Função para marcar ponto, assim que o ator atingir Y definido, nesse caso o número definido do Y e 15
  function marcaPonto(){
    if (yAtor < 15){
      meusPontos += 1;
      somDoPonto.play();
      voltaAtorParaPosicaoInicial();
    }
  }

//Função para não tirar o ponto do ator, caso esteja com a pontução igual a zero
  function pontosMaiorQueZero(){
    return meusPontos > 0;
  }