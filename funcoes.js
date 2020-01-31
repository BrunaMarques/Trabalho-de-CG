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
  let M2, M1;

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

function Rotacao(O) {
  R = [];
  let M2, M1;
  console.log("ROTACAO");

  let x = cordTranf[0];
  let y = cordTranf[1];
  console.log("X ", x);
  console.log("Y ", y);

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
      // M1 = [
      //   [Math.cos(O), -Math.sin(O), y * Math.sin(O) - x * Math.cos(0) + x],
      //   [Math.sin(O), Math.cos(O), -x * Math.sin(O) - y * Math.cos(0) + y],
      //   [0, 0, 1]
      // ];
      M1 = [
        [Math.cos(O), -Math.sin(O), y * Math.sin(O) - x * Math.cos(0) + x],
        [Math.sin(O), Math.cos(O), -x * Math.sin(O) - y * Math.cos(0) + y],
        [0, 0, 1]
      ];
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
