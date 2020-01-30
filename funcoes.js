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
  console.log("TRANSLACAOOOOOOO");

  for (let j = 0; j < listaDesenho.length; j++) {
    if (listaDesenho[j].select == true) {
      for (let k = 0; k < listaDesenho[j].pontos.length; k += 2) {
        let dx = cordTranf[2] - cordTranf[0];

        let dy = cordTranf[3] - cordTranf[1];

        let M1 = [
          [1, 0, dx],
          [0, 1, dy],
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
    }
  }
  console.log("MATRIZ FINAL: ", R);
  desenhaLista();
}
