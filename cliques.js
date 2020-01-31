var reta = document.getElementById("reta");
reta.addEventListener("click", setReta);

function setReta() {
  n = 2;
  op = "reta";
  i = 0;
  cord = [];
  desenhando = true;
}
var triangulo = document.getElementById("triangulo");
triangulo.addEventListener("click", setTriangulo);

function setTriangulo() {
  n = 3;
  op = "triangulo";
  i = 0;
  cord = [];
  desenhando = true;
}
var retangulo = document.getElementById("retangulo");
retangulo.addEventListener("click", setRetangulo);

function setRetangulo() {
  n = 2;
  op = "retangulo";
  i = 0;
  cord = [];
  desenhando = true;
}

var circulo = document.getElementById("circulo");
circulo.addEventListener("click", setCirculo);

function setCirculo() {
  n = 2;
  op = "circulo";
  i = 0;
  cord = [];
  desenhando = true;
}

var clear = document.getElementById("clear");
clear.addEventListener("click", setClear);

function setClear() {
  n = 0;
  listaDesenho = [];
  i = 0;
  cord = [];
  context.clearRect(0, 0, 800, 550);
}

var selectAll = document.getElementById("selectAll");
selectAll.addEventListener("click", setSelectAll);

function setSelectAll() {
  i = 0;
  cord = [];
  n = 0;
  for (let j = 0; j < listaDesenho.length; j++) {
    listaDesenho[j].select = true;
  }
  desenhaLista();
}

var translacao = document.getElementById("translacao");
translacao.addEventListener("click", setTranslacao);

function setTranslacao() {
  n = 2;
  cordTranf = [];
  op = "translacao";
  i = 0;
  cord = [];
  desenhando = true;
}

var escala = document.getElementById("escala");
escala.addEventListener("click", setEscala);

function setEscala() {
  let Sxy = prompt(
    "Entre com os valores de X e Y para a musança de escala. Insira da segunte forma: X,Y",
    "2,1"
  );
  let aux = Sxy.split(",");
  let Sx = parseInt(aux[0]);
  let Sy = parseInt(aux[1]);
  console.log("x e y", Sx, Sy);
  n = 0;
  cordTranf = [];
  i = 0;
  cord = [];
  desenhando = false;
  MEscala(Sx, Sy);
}

var rotacao = document.getElementById("rotacao");
rotacao.addEventListener("click", setRotacao);

function setRotacao() {
  op = "rotacao";
  O = prompt("Entre com o angulo para a rotação.", "45");
  n = 1;
  cordTranf = [];
  i = 0;
  cord = [];
  desenhando = true;
}
