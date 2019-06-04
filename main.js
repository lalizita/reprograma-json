const listaDeAutores = JSON.stringify(autores)
const listaDeAutoresJs = JSON.parse(listaDeAutores)
console.log(listaDeAutoresJs)

const createTable = livro =>{
  let table = ''
  livro.forEach((item) => {
    table += `
      <tr>
        <td>${item.livro}</td>
        <td>${item.autor}</td>
        <td>${item.genero}</td>
      </tr>
    `
  })
  return table
}

const orderByAutor = document.getElementById("autor")

orderByAutor.addEventListener("click", (e) => {
  const listaOrdenada = autores.livros.sort((elementoAnterior, proximoElemento) =>  {
    return elementoAnterior.autor.toUpperCase() < proximoElemento.autor.toUpperCase() ? -1 : 1
  })
  document.getElementById("table-section").innerHTML = createTable(listaOrdenada)
})

document.getElementById("table-section").innerHTML = createTable(autores.livros)