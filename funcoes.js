function multMatriz(a, b) {
  var aNumRows = a.length,
    aNumCols = a[0].length,
    bNumRows = b.length,
    bNumCols = b[0].length,
    m = new Array(aNumRows); // initialize array of rows
  for (var r = 0; r < aNumRows; ++r) {
    m[r] = new Array(bNumCols); // initialize the current row
    for (var c = 0; c < bNumCols; ++c) {
      m[r][c] = 0; // initialize the current cell
      for (var i = 0; i < aNumCols; ++i) {
        m[r][c] += a[r][i] * b[i][c];
      }
    }
  }
  return m;
}
function Ftranslacao() {
  R = [];
  let M2;
  let dx = cordTranf[2] - cordTranf[0];
  let dy = cordTranf[3] - cordTranf[1];
  let M1 = [
    [1, 0, dx],
    [0, 1, dy],
    [0, 0, 1]
  ];
  listaAux = listaDesenho;
  for (let j = 0; j < listaDesenho.length; j++) {
    if (listaDesenho[j].select == true) {
      if (listaDesenho[j].nome == "triangulo") {
        M2 = [
          [
            listaDesenho[j].pontos[0],
            listaDesenho[j].pontos[2],
            listaDesenho[j].pontos[4]
          ],
          [
            listaDesenho[j].pontos[1],
            listaDesenho[j].pontos[3],
            listaDesenho[j].pontos[5]
          ],
          [1, 1, 1]
        ];
      } else {
        M2 = [
          [listaDesenho[j].pontos[0], listaDesenho[j].pontos[2]],
          [listaDesenho[j].pontos[1], listaDesenho[j].pontos[3]],
          [1, 1, 1]
        ];
      }
      R = multMatriz(M1, M2);
      if (listaDesenho[j].nome == "triangulo") {
        listaDesenho[j].pontos[0] = R[0][0];
        listaDesenho[j].pontos[1] = R[1][0];
        listaDesenho[j].pontos[2] = R[0][1];
        listaDesenho[j].pontos[3] = R[1][1];
        listaDesenho[j].pontos[4] = R[0][2];
        listaDesenho[j].pontos[5] = R[1][2];
      } else {
        listaDesenho[j].pontos[0] = R[0][0];
        listaDesenho[j].pontos[1] = R[1][0];
        listaDesenho[j].pontos[2] = R[0][1];
        listaDesenho[j].pontos[3] = R[1][1];
      }
    }
    listaDesenho[j].select == false;
  }

  desenhaLista();
}

function MEscala(Sx, Sy) {
  R = [];
  let M2, M1;
  listaAux = listaDesenho;
  for (let j = 0; j < listaDesenho.length; j++) {
    if (listaDesenho[j].select == true) {
      if (listaDesenho[j].nome == "triangulo") {
        M2 = [
          [
            listaDesenho[j].pontos[0],
            listaDesenho[j].pontos[2],
            listaDesenho[j].pontos[4]
          ],
          [
            listaDesenho[j].pontos[1],
            listaDesenho[j].pontos[3],
            listaDesenho[j].pontos[5]
          ],
          [1, 1, 1]
        ];
      } else {
        M2 = [
          [listaDesenho[j].pontos[0], listaDesenho[j].pontos[2]],
          [listaDesenho[j].pontos[1], listaDesenho[j].pontos[3]],
          [1, 1, 1]
        ];
      }
      M1 = [
        [Sx, 0, listaDesenho[j].pontos[0] - listaDesenho[j].pontos[0] * Sx],
        [0, Sy, listaDesenho[j].pontos[1] - listaDesenho[j].pontos[1] * Sy],
        [0, 0, 1]
      ];
      R = multMatriz(M1, M2);
      if (listaDesenho[j].nome == "triangulo") {
        listaDesenho[j].pontos[0] = R[0][0];
        listaDesenho[j].pontos[1] = R[1][0];
        listaDesenho[j].pontos[2] = R[0][1];
        listaDesenho[j].pontos[3] = R[1][1];
        listaDesenho[j].pontos[4] = R[0][2];
        listaDesenho[j].pontos[5] = R[1][2];
      } else {
        listaDesenho[j].pontos[0] = R[0][0];
        listaDesenho[j].pontos[1] = R[1][0];
        listaDesenho[j].pontos[2] = R[0][1];
        listaDesenho[j].pontos[3] = R[1][1];
      }
    }
    listaDesenho[j].select == false;
  }

  desenhaLista();
}

function Rotacao(O) {
  O = O * (Math.PI / 180);
  let cos = Math.sin(-O);
  let sen = Math.sin(-O);
  R = [];
  let M2 = [];
  let M1 = [];
  let x = cordTranf[0];
  let y = cordTranf[1];
  listaAux = listaDesenho;
  for (let j = 0; j < listaDesenho.length; j++) {
    if (listaDesenho[j].select == true) {
      if (listaDesenho[j].nome == "triangulo") {
        M2 = [
          [
            listaDesenho[j].pontos[0],
            listaDesenho[j].pontos[2],
            listaDesenho[j].pontos[4]
          ],
          [
            listaDesenho[j].pontos[1],
            listaDesenho[j].pontos[3],
            listaDesenho[j].pontos[5]
          ],
          [1, 1, 1]
        ];
      } else {
        M2 = [
          [listaDesenho[j].pontos[0], listaDesenho[j].pontos[2]],
          [listaDesenho[j].pontos[1], listaDesenho[j].pontos[3]],
          [1, 1, 1]
        ];
      }

      M1 = [
        [cos, -sen, y * sen - x * cos + x],
        [sen, cos, -x * sen - y * cos + y],
        [0, 0, 1]
      ];

      R = multMatriz(M1, M2);
      if (listaDesenho[j].nome == "triangulo") {
        listaDesenho[j].pontos[0] = R[0][0];
        listaDesenho[j].pontos[1] = R[1][0];
        listaDesenho[j].pontos[2] = R[0][1];
        listaDesenho[j].pontos[3] = R[1][1];
        listaDesenho[j].pontos[4] = R[0][2];
        listaDesenho[j].pontos[5] = R[1][2];
      } else {
        listaDesenho[j].pontos[0] = R[0][0];
        listaDesenho[j].pontos[1] = R[1][0];
        listaDesenho[j].pontos[2] = R[0][1];
        listaDesenho[j].pontos[3] = R[1][1];
      }
    }
    listaDesenho[j].select == false;
  }
  desenhaLista();
}
var maxX = 0;
var minX = 750;
var maxY = 0;
var minY = 490;

function pegaMaxMin() {
  for (let w = 0; w < listaDesenho.length; w++) {
    if (listaDesenho[w].nome == "reta") {
      if (listaDesenho[w].pontos[0] > maxX) {
        maxX = listaDesenho[w].pontos[0];
      } else if (listaDesenho[w].pontos[2] > maxX) {
        maxX = listaDesenho[w].pontos[2];
      } else if (listaDesenho[w].pontos[0] < minX) {
        minX = listaDesenho[w].pontos[0];
      } else if (listaDesenho[w].pontos[2] < minX) {
        minX = listaDesenho[w].pontos[2];
      }
      if (listaDesenho[w].pontos[1] > maxY) {
        maxY = listaDesenho[w].pontos[1];
      } else if (listaDesenho[w].pontos[3] > maxY) {
        maxY = listaDesenho[w].pontos[3];
      } else if (listaDesenho[w].pontos[1] < minY) {
        minY = listaDesenho[w].pontos[1];
      } else if (listaDesenho[w].pontos[3] < minY) {
        minY = listaDesenho[w].pontos[3];
      }
    }
    if (listaDesenho[w].nome == "circulo") {
      if (listaDesenho[w].pontos[2] > maxX) {
        maxX = listaDesenho[w].pontos[2];
      } else if (listaDesenho[w].pontos[6] > maxX) {
        maxX = listaDesenho[w].pontos[6];
      } else if (listaDesenho[w].pontos[2] < minX) {
        minX = listaDesenho[w].pontos[2];
      } else if (listaDesenho[w].pontos[6] < minX) {
        minX = listaDesenho[w].pontos[6];
      }

      if (listaDesenho[w].pontos[3] > maxY) {
        maxY = listaDesenho[w].pontos[3];
      } else if (listaDesenho[w].pontos[5] > maxY) {
        maxY = listaDesenho[w].pontos[5];
      } else if (listaDesenho[w].pontos[9] > maxY) {
        maxY = listaDesenho[w].pontos[9];
      } else if (listaDesenho[w].pontos[3] < minY) {
        minY = listaDesenho[w].pontos[3];
      } else if (listaDesenho[w].pontos[3] < minY) {
        minY = listaDesenho[w].pontos[3];
      } else if (listaDesenho[w].pontos[9] < minY) {
        minY = listaDesenho[w].pontos[9];
      }
    }
    if (listaDesenho[w].nome == "retangulo") {
      if (listaDesenho[w].pontos[0] > maxX) {
        maxX = listaDesenho[w].pontos[0];
      } else if (listaDesenho[w].pontos[2] > maxX) {
        maxX = listaDesenho[w].pontos[2];
      } else if (listaDesenho[w].pontos[0] < minX) {
        minX = listaDesenho[w].pontos[0];
      } else if (listaDesenho[w].pontos[2] < minX) {
        minX = listaDesenho[w].pontos[2];
      }
      if (listaDesenho[w].pontos[1] > maxY) {
        maxY = listaDesenho[w].pontos[1];
      } else if (listaDesenho[w].pontos[3] > maxY) {
        maxY = listaDesenho[w].pontos[3];
      } else if (listaDesenho[w].pontos[1] < minY) {
        minY = listaDesenho[w].pontos[1];
      } else if (listaDesenho[w].pontos[3] < minY) {
        minY = listaDesenho[w].pontos[3];
      }
    }
    if (listaDesenho[w].nome == "triangulo") {
      if (listaDesenho[w].pontos[0] > maxX) {
        maxX = listaDesenho[w].pontos[0];
      } else if (listaDesenho[w].pontos[2] > maxX) {
        maxX = listaDesenho[w].pontos[2];
      } else if (listaDesenho[w].pontos[4] > maxX) {
        maxX = listaDesenho[w].pontos[4];
      } else if (listaDesenho[w].pontos[0] < minX) {
        minX = listaDesenho[w].pontos[0];
      } else if (listaDesenho[w].pontos[2] < minX) {
        minX = listaDesenho[w].pontos[2];
      } else if (listaDesenho[w].pontos[4] < minX) {
        minX = listaDesenho[w].pontos[4];
      }
      if (listaDesenho[w].pontos[1] > maxY) {
        maxY = listaDesenho[w].pontos[1];
      } else if (listaDesenho[w].pontos[3] > maxY) {
        maxY = listaDesenho[w].pontos[3];
      } else if (listaDesenho[w].pontos[5] > maxY) {
        maxY = listaDesenho[w].pontos[5];
      } else if (listaDesenho[w].pontos[1] < minY) {
        minY = listaDesenho[w].pontos[1];
      } else if (listaDesenho[w].pontos[3] < minY) {
        minY = listaDesenho[w].pontos[3];
      } else if (listaDesenho[w].pontos[5] < minY) {
        minY = listaDesenho[w].pontos[5];
      }
    }
  }
}

function zoomExtend() {
  pegaMaxMin();
  let Zsx = canvas.width / (maxX - minX);
  let Zsy = canvas.height / (maxY - minY);
  let RW = canvas.width / canvas.height;
  let RV = (maxX - minX) / (maxY - minY);
  let Ynovo = (maxX - minX) / RW + minY;
  let Xnovo = RW * (maxY - minY) + minX;
  let M1 = [];
  let M2 = [];
  let M3 = [];
  let R = [];
  let R2 = [];
  todos = [];
  unico = [];
  for (let j = 0; j < listaDesenho.length; j++) {
    if (listaDesenho[j].nome == "triangulo") {
      M3 = [
        [
          listaDesenho[j].pontos[0],
          listaDesenho[j].pontos[2],
          listaDesenho[j].pontos[4]
        ],
        [
          listaDesenho[j].pontos[1],
          listaDesenho[j].pontos[3],
          listaDesenho[j].pontos[5]
        ],
        [1, 1, 1]
      ];
    } else {
      M3 = [
        [listaDesenho[j].pontos[0], listaDesenho[j].pontos[2]],
        [listaDesenho[j].pontos[1], listaDesenho[j].pontos[3]],
        [1, 1, 1]
      ];
    }
    if (RW > RV) {
      //Faz com o Y

      M1 = [
        [1, 0, 0],
        [0, 1, (maxY - Ynovo) / 2],
        [0, 0, 0]
      ];
      M2 = [
        [Zsx, 0, -Zsx * minX],
        [0, Zsy, -Zsy * minY],
        [0, 0, 0]
      ];
    } else {
      M1 = [
        [1, 0, (maxX - Xnovo) / 2],
        [0, 1, 0],
        [0, 0, 0]
      ];
      M2 = [
        [Zsx, 0, -Zsx * minX],
        [0, Zsy, -Zsy * minY],
        [0, 0, 0]
      ];
    }
    R = multMatriz(M1, M2);
    R2 = multMatriz(R, M3);
    if (listaDesenho[j].nome == "triangulo") {
      listaDesenho[j].pontos[0] = R2[0][0];
      listaDesenho[j].pontos[1] = R2[1][0];
      listaDesenho[j].pontos[2] = R2[0][1];
      listaDesenho[j].pontos[3] = R2[1][1];
      listaDesenho[j].pontos[4] = R2[0][2];
      listaDesenho[j].pontos[5] = R2[1][2];
    } else {
      listaDesenho[j].pontos[0] = R2[0][0];
      listaDesenho[j].pontos[1] = R2[1][0];
      listaDesenho[j].pontos[2] = R2[0][1];
      listaDesenho[j].pontos[3] = R2[1][1];
    }
  }
  desenhaLista();
}
