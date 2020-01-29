class forma {
  constructor(nome, id, pontos) {
    this.nome = nome;
    this.id = id;
    this.pontos = pontos;
  }
}
var listaDesenho = [];
var cord = [];
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d"); //utilizado para recuperar o contexto de desenho, presente em todos os canvas
var i = 0;
var id = 0;
tamLista = listaDesenho.length;
function posicaoClique(evento) {
  console.log(tamLista);

  if (i < n) {
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

  switch (op) {
    case "reta":
      console.log("AAASWUNS");
      listaDesenho.push(new forma("reta", id++, cord));

      break;
    case "circulo":
      listaDesenho.push(new forma("circulo", id++, cord));

      break;
    case "retangulo":
      listaDesenho.push(new forma("retangulo", id++, cord));

      break;
    case "triangulo":
      listaDesenho.push(new forma("triangulo", id++, cord));

      break;
  }
  if (tamLista != listaDesenho.length) {
    console.log("xnnmxmx");
    desenhaLista();
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
  //   if (i == 2) {
  //     // context.clearRect(0, 0, 800, 550);
  //     desenhaCirculo(context);
  //     cord = [];
  //     i = 0;
  //   }
  // if (i == 2) {
  //   desenhaQuadrado(context);
  //   cord = [];
  //   i = 0;
  // }
}

var canvas = document.getElementById("myCanvas");
canvas.addEventListener("click", posicaoClique, true); //pegando o elemento canvas
// context.clearRect(0, 0, 800, 550);

//
