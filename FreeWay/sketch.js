//Função para definir o tamanho área e largura

function setup() {
  createCanvas(400, 400);
}

// Função para desenhar

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaAtor();
  movimentaCarro();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
 
}

