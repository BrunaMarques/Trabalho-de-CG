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
  listaDesenho = []; //lembrar de limpar os nomes e id dos objetos
  i = 0;
  cord = [];
  id = 0;
  context.clearRect(0, 0, 750, 490);
}

var selectAll = document.getElementById("selectAll");
selectAll.addEventListener("click", setSelectAll);

function selectOne(td) {
  console.log("aaaa", td.id)
  i = 0;
  for (let k = 0; k < listaDesenho.length; k++) {
    if (listaDesenho[k].id == td.id) {
      listaDesenho[k].select = true;
    }
  }
  desenhaLista();
}


function setSelectAll() {
  console.log(listaDesenho);
  i = 0;
  cord = [];
  for (let j = 0; j < listaDesenho.length; j++) {
    listaDesenho[j].select = true;
  }
  desenhaLista();
}

var translacao = document.getElementById("translacao");
translacao.addEventListener("click", setTranslacao);

function setTranslacao() {
  console.log("QUE MERDAA NÃO VAI PQ");
  n = 2;
  cordTranf = [];
  op = "translacao";
  i = 0;
  cord = [];
  desenhando = true;
}
