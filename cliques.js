var reta = document.getElementById("reta");
reta.addEventListener("click", setReta);

function setReta() {
  n = 2;
  op = "reta";
  i = 0;
  cord = [];
}
var triangulo = document.getElementById("triangulo");
triangulo.addEventListener("click", setTriangulo);

function setTriangulo() {
  n = 3;
  op = "triangulo";
  i = 0;
  cord = [];
}
var retangulo = document.getElementById("retangulo");
retangulo.addEventListener("click", setRetangulo);

function setRetangulo() {
  n = 3;
  op = "retangulo";
  i = 0;
  cord = [];
}

var circulo = document.getElementById("circulo");
circulo.addEventListener("click", setCirculo);

function setCirculo() {
  n = 2;
  op = "circulo";
  i = 0;
  cord = [];
}

var circulo = document.getElementById("clear");
circulo.addEventListener("click", setClear);

function setClear() {
  n = 0;
  listaDesenho = [];
  i = 0;
  cord = [];
  context.clearRect(0, 0, 800, 550);
}

var circulo = document.getElementById("selectAll");
circulo.addEventListener("click", setSelectAll);

function setSelectAll() {
  i = 0;
  cord = [];
  for (j = 0; j < 3; j++) {
    listaDesenho[j].select = true;
  }
  desenhaLista();
}
