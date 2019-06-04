const listaDeLivros = JSON.stringify(autores)
const listaDeLivrosJs = JSON.parse(listaDeLivros)

const insertRows = bunda => {
  let table = ''
  bunda.forEach((livro) => {
    table+= `
      <tr>
        <td>${livro.livro}</td>
        <td>${livro.autor}</td>
        <td>${livro.genero}</td>
      </tr>
    `
  })
  return table
}

const ordenarLivro = document.getElementById("ordenar-livro")

ordenarLivro.addEventListener("click", (e) => {
  const listaOrdenada = listaDeLivrosJs.livros.sort((livroA, livroB) => {
    if(livroA.livro.toLowerCase() < livroB.livro.toLowerCase()){
      return -1
    }
    if(livroA.livro.toLowerCase() > livroB.livro.toLowerCase()){
      return 1
    }
    return 0
  })
  document.getElementById("table-section").innerHTML = insertRows(listaOrdenada)
})

document.getElementById("table-section").innerHTML = insertRows(listaDeLivrosJs.livros)