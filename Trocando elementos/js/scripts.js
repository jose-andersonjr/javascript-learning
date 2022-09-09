// Criar um elemento
let elemento = document.createElement('h3')

elemento.classList = 'testando-classe'

let texto = document.createTextNode('Este é o texto de h3')

elemento.appendChild(texto)
console.log(elemento)

// Selecionar o elemento que quero trocar
let title = document.querySelector('#title')

console.log(title)

// Selecionar o pai do elemento
let pai = title.parentNode

// Trocar os elementos
pai.replaceChild(elemento, title)
