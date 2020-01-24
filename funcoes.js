var cord = [];
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d"); //utilizado para recuperar o contexto de desenho, presente em todos os canvas
var i = 0;

function posicaoClique(evento) {
  if (i < 3) {
    var posX = evento.clientX - canvas.offsetLeft; //  saber a distância do canvas em relação ao topo e à esquerda para que a posição seja relativa ao canvas e não à janela do navegação
    var posY = evento.clientY - canvas.offsetTop;
    console.clear();
    console.log("Posição do clique: ", posX + "," + posY);
    context.fillRect(posX, posY, 5, 5);
    cord.push(posX);
    cord.push(posY);
    cord.forEach(function(item, indice, array) {
      console.log(item, indice);
    });
    i++;
  }
  //   if (i == 2) {
  //     // fazer um swich aqui
  //     context.clearRect(0, 0, 800, 550);
  //     desenhaReta(canvas, context);
  //     cord = [];
  //     i = 0;
  //   }
  if (i == 3) {
    context.clearRect(0, 0, 800, 550);
    desenhaTriangulo(canvas, context);
    cord = [];
    i = 0;
  }
}

function desenhaReta(canvas, context) {
  console.log("AAAAA");

  context.moveTo(cord[0], cord[1]);
  context.lineTo(cord[2], cord[3]);
  context.stroke();
}

function desenhaTriangulo(canvas, context) {
  context.beginPath();
  context.moveTo(cord[0], cord[1]);
  context.lineTo(cord[2], cord[3]);
  context.lineTo(cord[4], cord[5]);
  context.closePath();
  context.stroke();
}
var canvas = document.getElementById("myCanvas");
canvas.addEventListener("click", posicaoClique, true); //pegando o elemento canvas
// context.clearRect(0, 0, 800, 550);

//
