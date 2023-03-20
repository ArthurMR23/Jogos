//Variáveis para colocar imagens de fundo e personagem

let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

//Função para carregar as imagens 

function preload() {
  imagemDaEstrada = loadImage("imagens/estrada.png"); //Foi usado função para carregar imagem e colocado o nome declarado imagemDaEstrada. 
  imagemDoAtor = loadImage("imagens/ator-1.png"); //Foi usado função para carregar imagem e colocado o nome declarado imagemDoAtor.
  imagemCarro = loadImage("imagens/carro-1.png"); //Foi usado função para carregar imagem e colocado o nome declarado imagemCarro.
  imagemCarro2 = loadImage("imagens/carro-2.png"); //Foi usado função para carregar imagem e colocado o nome declarado imagemCarro2.
  imagemCarro3 = loadImage("imagens/carro-3.png"); //Foi usado função para carregar imagem e colocado o nome declarado imagemCarro3.
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3]; //Lista criada, com os nomes das variáveis dos carros criados. 
}



