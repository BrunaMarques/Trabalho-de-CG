function desenhaReta(context, pontos, select) {
  console.log(select);
  context.moveTo(pontos[0], pontos[1]);
  context.lineTo(pontos[2], pontos[3]);

  if (select == true) {
    context.strokeStyle = "red";
  } else {
    context.strokeStyle = "black";
  }
  context.stroke();
}

function desenhaTriangulo(context, pontos, select) {
  console.log(select);
  context.beginPath();
  context.moveTo(pontos[0], pontos[1]);
  context.lineTo(pontos[2], pontos[3]);
  context.lineTo(pontos[4], pontos[5]);
  context.closePath();

  if (select == true) {
    context.strokeStyle = "red";
  } else {
    context.strokeStyle = "black";
  }
  context.stroke();
}

function desenhaCirculo(context, pontos, select) {
  console.log(select);
  r = Math.sqrt(
    Math.pow(pontos[0] - pontos[2], 2) + Math.pow(pontos[1] - pontos[3], 2)
  );
  console.log("r", r);
  context.beginPath();
  context.arc(pontos[0], pontos[3], r, 0, 2 * Math.PI, false);

  context.closePath();
  if (select == true) {
    context.strokeStyle = "red";
  } else {
    context.strokeStyle = "black";
  }
  context.stroke();
}

function circuloQuatro() {
  for (let k = 0; k < listaDesenho; k++) {
    if (listaDesenho[k].nome == "circulo") {
      listaDesenho[k].pontos[5] = (listaDesenho[k].pontos[1] + r)
      listaDesenho[k].pontos[9] = (listaDesenho[k].pontos[1] - r)
      listaDesenho[k].pontos[2] = (listaDesenho[k].pontos[0] + r)
      listaDesenho[k].pontos[6] = (listaDesenho[k].pontos[0] - r)
    }
  }
}

function desenhaRetangulo(context, pontos, select) {
  console.log(select);
  d1 = Math.sqrt(
    Math.pow(pontos[0] - pontos[0], 2) + Math.pow(pontos[1] - pontos[3], 2)
  );
  d2 = Math.sqrt(
    Math.pow(pontos[1] - pontos[1], 2) + Math.pow(pontos[0] - pontos[2], 2)
  );

  if (select == true) {
    context.strokeStyle = "red";
  } else {
    context.strokeStyle = "black";
  }
  context.strokeRect(pontos[0], pontos[1], d2, d1);
}

function desenhaLista() {
  context.clearRect(0, 0, 750, 490);
  for (let j = 0; j < listaDesenho.length; j++) {
    if (listaDesenho[j].nome == "reta") {
      desenhaReta(context, listaDesenho[j].pontos, listaDesenho[j].select);
    } else if (listaDesenho[j].nome == "circulo") {
      desenhaCirculo(context, listaDesenho[j].pontos, listaDesenho[j].select);
    } else if (listaDesenho[j].nome == "triangulo") {
      desenhaTriangulo(context, listaDesenho[j].pontos, listaDesenho[j].select);
    } else {
      desenhaRetangulo(context, listaDesenho[j].pontos, listaDesenho[j].select);
    }
  }
}
