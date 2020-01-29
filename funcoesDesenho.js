function desenhaReta(context, pontos, select) {
  context.moveTo(pontos[0], pontos[1]);
  context.lineTo(pontos[2], pontos[3]);
  context.stroke();
  if (select == true) {
    context.strokeStyle = "red";
  }
}

function desenhaTriangulo(context, pontos, select) {
  context.beginPath();
  context.moveTo(pontos[0], pontos[1]);
  context.lineTo(pontos[2], pontos[3]);
  context.lineTo(pontos[4], pontos[5]);
  context.closePath();
  context.stroke();
  if (select == true) {
    context.strokeStyle = "red";
  }
}

function desenhaCirculo(context, pontos, select) {
  r = Math.sqrt(
    Math.pow(pontos[0] - pontos[2], 2) + Math.pow(pontos[1] - pontos[3], 2)
  );
  console.log("r", r);
  context.beginPath();
  context.arc(pontos[0], pontos[3], r, 0, 2 * Math.PI, false);
  context.stroke();
  context.closePath();
  if (select == true) {
    context.strokeStyle = "red";
  }
}

function desenhaRetangulo(context, pontos, select) {
  d1 = Math.sqrt(
    Math.pow(pontos[0] - pontos[0], 2) + Math.pow(pontos[1] - pontos[3], 2)
  );
  d2 = Math.sqrt(
    Math.pow(pontos[1] - pontos[1], 2) + Math.pow(pontos[0] - pontos[2], 2)
  );

  context.strokeRect(pontos[0], pontos[1], d2, d1);
  if (select == true) {
    context.strokeStyle = "red";
  }
}

function desenhaLista() {
  context.clearRect(0, 0, 800, 550);
  for (j = 0; j < listaDesenho.length; j++) {
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
