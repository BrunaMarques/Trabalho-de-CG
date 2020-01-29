class forma {
  constructor(nome, id, pontos) {
    this.nome = nome;
    this.id = id;
    this.pontos = pontos;
  }
}

var cord = [];
var canvas = document.getElementById("myCanvas");
canvas.width = 750;
canvas.height = 490;
canvas.style.width = 375;
canvas.style.height = 245;

var context = canvas.getContext("2d"); //utilizado para recuperar o contexto de desenho, presente em todos os canvas
var i = 0;

function posicaoClique(evento) {
  if (i < 2) {
    var posX = evento.clientX - canvas.offsetLeft; //  saber a distância do canvas em relação ao topo e à esquerda para que a posição seja relativa ao canvas e não à janela do navegação
    var posY = evento.clientY - canvas.offsetTop;
    console.clear();
    console.log("Posição do clique: ", posX + "," + posY);
    context.fillRect(posX, posY, 5, 5);
    cord.push(posX);
    cord.push(posY);
    cord.forEach(function (item, indice, array) {
      console.log(item, indice);
    });
    i++;
  }
  // if (i == 2) {
  //   // fazer um swich aqui
  //   context.clearRect(0, 0, 800, 550);
  //   desenhaReta(canvas, context);
  //   cord = [];
  //   i = 0;
  // }
  // if (i == 3) {
  //   desenhaTriangulo(canvas, context);
  //   cord = [];
  //   i = 0;
  // }
  if (i == 2) {
    // context.clearRect(0, 0, 800, 550);
    desenhaCirculo(context);
    cord = [];
    i = 0;
  }
  // if (i == 2) {
  //   desenhaQuadrado(context);
  //   cord = [];
  //   i = 0;
  // }
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

function desenhaCirculo(context) {
  r = Math.sqrt(
    Math.pow(cord[0] - cord[2], 2) + Math.pow(cord[1] - cord[3], 2)
  );
  console.log("r", r);
  context.beginPath();
  context.arc(cord[0], cord[3], r, 0, 2 * Math.PI, false);
  context.stroke();
  context.closePath();
}

function desenhaQuadrado(context) {
  r = Math.sqrt(
    Math.pow(cord[0] - cord[2], 2) + Math.pow(cord[1] - cord[3], 2)
  );
  context.strokeRect(cord[0], cord[3], r, r);
}
//var canvas = document.getElementById("myCanvas");
canvas.addEventListener("click", posicaoClique, true); //pegando o elemento canvas
// context.clearRect(0, 0, 800, 550);

function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

canvas.addEventListener('mousemove', function (evt) {
  var mousePos = getMousePos(canvas, evt);
  document.getElementById("xycoordinates").innerHTML = 'Coordenadas: x(' + mousePos.x + ')' + ' , y(' + mousePos.y + ")";
}, false);
