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
  console.log("Translaçãaaaaaaaaao");
  R = [];
  let M2;
  let dx = cordTranf[2] - cordTranf[0];
  let dy = cordTranf[3] - cordTranf[1];
  let M1 = [
    [1, 0, dx],
    [0, 1, dy],
    [0, 0, 1]
  ];
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
      console.log("M1 = ", M1);
      console.log("M2 = ", M2);
      R = multMatriz(M1, M2);
      console.log("R = ", R);
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
      listaDesenho[j].select == false;
    }
  }
  desenhaLista();
}

function MEscala(Sx, Sy) {
  R = [];
  for (let j = 0; j < listaDesenho.length; j++) {
    if (listaDesenho[j].select == true) {
      for (let k = 0; k < listaDesenho[j].pontos.length; k += 2) {
        let M1 = [
          [Sx, 0, 0],
          [0, Sy, 0],
          [0, 0, 1]
        ];
        let M2 = [
          [listaDesenho[j].pontos[k]],
          [listaDesenho[j].pontos[k + 1]],
          [1]
        ];
        R = multMatriz(M1, M2);
        listaDesenho[j].pontos[k] = R[0];
        listaDesenho[j].pontos[k + 1] = R[1];
      }
      listaDesenho[j].select == false;
    }
  }
  desenhaLista();
}

function Rotacao(O) {
  R = [];
  M2 = [];
  for (let j = 0; j < listaDesenho.length; j++) {
    if (listaDesenho[j].select == true) {
      for (let k = 0; k < listaDesenho[j].pontos.length; k += 2) {
        M2.push([
          [listaDesenho[j].pontos[k]],
          [listaDesenho[j].pontos[k + 1]],
          [1]
        ]);
      }
      let M1 = [
        [
          Math.cos(O),
          -Math.sin(O),
          Math.sin(O) - cordTranf[0] * Math.cos(O) + x
        ],
        [
          Math.sin(O),
          Math.cos(O),
          -cordTranf[0] * Math.sin(O) -
            cordTranf[1] * Math.cos(O) +
            cordTranf[1]
        ],
        [0, 0, 1]
      ];

      R = multMatriz(M1, M2);

      listaDesenho[j].select == false;
    }
  }
  desenhaLista();
}
