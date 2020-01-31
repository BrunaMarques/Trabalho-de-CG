var reta = document.getElementById("reta");
reta.addEventListener("click", setReta);
var temselect = false;

function setReta() {
  alert("Selecione dois pontos para desenhar a reta");
  n = 2;
  op = "reta";
  i = 0;
  cord = [];
  desenhando = true;
}
var triangulo = document.getElementById("triangulo");
triangulo.addEventListener("click", setTriangulo);

function setTriangulo() {
  alert("Selecione três pontos para desenhar o triângulo");
  n = 3;
  op = "triangulo";
  i = 0;
  cord = [];
  desenhando = true;
}
var retangulo = document.getElementById("retangulo");
retangulo.addEventListener("click", setRetangulo);

function setRetangulo() {
  alert("Selecione dois pontos para desenhar o retângulo");
  n = 2;
  op = "retangulo";
  i = 0;
  cord = [];
  desenhando = true;
}

var circulo = document.getElementById("circulo");
circulo.addEventListener("click", setCirculo);

function setCirculo() {
  alert(
    "Selecione dois pontos para desenhar o circulo. O primeiro ponto deve ser o centro e o segundo a extremidade do círculo"
  );
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
  for (let j = 0; j < listaDesenho.length; j++) {
    listaDesenho[j].select = false;
    context.strokeStyle = "black";
  }
  context.clearRect(0, 0, 750, 490);
  limparTabela(table);
  temselect = false;
  desenhaLista();
}

function selectOne(td) {
  i = 0;
  for (let k = 0; k < listaDesenho.length; k++) {
    if (listaDesenho[k].id == td.id) {
      listaDesenho[k].select = true;
      temselect = true;
    }
  }
  desenhaLista();
}

var selectAll = document.getElementById("selectAll");
selectAll.addEventListener("click", setSelectAll);

function setSelectAll() {
  i = 0;
  cord = [];
  n = 0;
  for (let j = 0; j < listaDesenho.length; j++) {
    listaDesenho[j].select = true;
    context.strokeStyle = "red";
  }
  desenhaLista();
}

var translacao = document.getElementById("translacao");
translacao.addEventListener("click", setTranslacao);

function setTranslacao() {
  if (temselect == false) {
    alert("Selecione um objeto primeiro!");
  } else {
    n = 2;
    cordTranf = [];
    op = "translacao";
    i = 0;
    cord = [];
    desenhando = true;
  }
}

var escala = document.getElementById("escala");
escala.addEventListener("click", setEscala);

function setEscala() {
  if (temselect == false) {
    alert("Selecione um objeto primeiro!");
  } else {
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
}

var rotacao = document.getElementById("rotacao");
rotacao.addEventListener("click", setRotacao);

function setRotacao() {
  if (temselect == false) {
    alert("Selecione um objeto primeiro!");
  } else {
    op = "rotacao";
    O = prompt("Entre com o angulo para a rotação.", "45");
    O = parseInt(O);
    n = 1;
    cordTranf = [];
    i = 0;
    cord = [];
    desenhando = true;
  }
}

function setAjuda() {
  alert(
    "Para desenhar um objeto na tela, selecione o objeto a ser desenhado e clique na tela os pontos onde deseja inserir o desenho.\nPara realizar uma transformação, selecione o objeto que deseja realizar a operação pela lista de objetos ou pelo selecionar tudo e então selecione a operação que deseja realizar. \n\tPara a translação, selecione dois pontos na tela, correspondentes ao vetor de translação. \n\tPara a rotação, insira os graus e clique no ponto que seja o eixo de rotação. \n\tPara a mudança de escala, insira os valores e clique no ponto do objeto onde ocorrerá a mudança.\nPara dar zoom, selecione a opção correspondente e selecione os dois pontos na tela onde deseja criar a janela."
  );
}
