console.log(conteudo);
function criarTabela(conteudo) {
  console.log("TABELAAAAAAAAAAA");
  console.log(conteudo);
  var tabela = document.createElement("table");
  var thead = document.createElement("thead");
  var tbody = document.createElement("tbody");
  var thd = function(k) {
    return k == 0 ? "th" : "td";
  };
  for (var k = 0; k < conteudo.length; k++) {
    var tr = document.createElement("tr");
    for (var o = 0; o < conteudo[k].length; o++) {
      var t = document.createElement(thd(k));
      var texto = document.createTextNode(conteudo[k][o]);
      t.appendChild(texto);

      tr.appendChild(t);
      console.log(t);
    }
    k == 0 ? thead.appendChild(tr) : tbody.appendChild(tr);
    console.log("tb: ", +tbody);
    console.log("tb: ", +thead);
  }
  tabela.appendChild(thead);
  tabela.appendChild(tbody);
  console.log("tabela: ", +tbody);
  return tabela;
}

document
  .getElementById("selectOne")
  .appendChild(criarTabela(conteudo)).innerHTML = "tabela: " + tabela;
