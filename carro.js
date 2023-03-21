//Váriaveis dos carros
let xCarros = [600, 600, 600, 600, 600, 600]; //Pocição inicial dos carros
let yCarros = [40, 96, 150, 210, 263, 318]; //Altura dos carros, "Pocição que fica nas pistas"
let velocidadeCarros = [2, 2.5, 3.2, /*Linha amarela*/ 5, 3.3, 2.3]; //Velocidade dos carros
let comprimentoCarro = 50;
let alturaCarro = 40;

//Função para com os dados dos carros, para ser apresentado
function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

//Função para movimentar o carro
function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}
//Função para quando o carro atingir o limite da tela definida, sendo o valor "50", retornar para o valor inicial
function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    if (passouTodaATela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

//Definido o valor que assim que o carro passar do valor 50, retornar pocição declarada, "600"
function passouTodaATela(xCarro){
  return xCarro < - 50;
}





