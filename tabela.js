const table = document.getElementById("selectOne");
var linhas = table.getElementsByTagName("tr");

function limparTabela(table) {
  table.innerHTML = "";
}

function criarTabela(listaDesenho) {
  limparTabela(table);
  for (let j = 0; j < listaDesenho.length; j++) {
    console.log("aqui", listaDesenho);
    table.innerHTML += `
    <tr>
    <td id = ${j} onclick=selectOne(this) >${listaDesenho[j].id +
      "_" +
      listaDesenho[j].nome}</td>
    </tr>`;
  }
}
