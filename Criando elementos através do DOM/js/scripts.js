let novoParagrafo = document.createElement('p')

console.log(novoParagrafo)

let texto = document.createTextNode('Este é o conteúdo do parágrafo')
novoParagrafo.appendChild(texto)
console.log(novoParagrafo)
let body = document.querySelector('body')
console.timeLog(body)
body.appendChild(novoParagrafo)
console.log(body)

// Inserir em um container
let container = document.querySelector('#container')
let textoContainer = document.createTextNode('Este é o conteúdo do container')
container.appendChild(textoContainer)
console.log(container)
let span = document.createElement('span')
let textoSpan = document.createTextNode('Este é um span')
span.appendChild(textoSpan)
container.appendChild(span)

