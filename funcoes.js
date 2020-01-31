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
  for (let j = 0; j < listaDesenho.length; j++) {
    if (listaDesenho[j].select == true) {
      for (let k = 0; k < listaDesenho[j].pontos.length; k += 2) {
        let dx = cordTranf[2] - cordTranf[0];

        let dy = cordTranf[1] - cordTranf[3];

        let M1 = [
          [1, 0, dx],
          [0, 1, dy],
          [0, 0, 1]
        ];
        let M2 = [
          [listaDesenho[j].pontos[k]], //Arrumar essa merda que eu fiz, to pegando errado, tem que ser a linha e estou passando a coluna
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
          [listaDesenho[j].pontos[k], listaDesenho[j].pontos[k + 1]],
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
