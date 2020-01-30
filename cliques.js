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
  console.log(listaDesenho);
  i = 0;
  cord = [];
  for (let j = 0; j < listaDesenho.length; j++) {
    listaDesenho[j].select = true;
  }
  desenhaLista();
}

var selectAll = document.getElementById("select");
selectAll.addEventListener("click", criarTabela(conteudo));
