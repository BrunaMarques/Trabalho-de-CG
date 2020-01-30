const table = document.getElementById("selectOne");
var tr = document.createElement("tr");
var td = document.createElement("td");


function limparTabela(table) {
  while (table.firstChild) {
    table.removeChild(table.firstChild);
  }
}

function criarTabela(listaDesenho) {
  limparTabela(table);
  for (j = 0; j < listaDesenho.length; j++) {
    console.log("aqui", listaDesenho)
    table.innerHTML += `<table><tr> <td> Objeto: ${listaDesenho[j].id + "=>" + listaDesenho[j].nome}`;
  }
}