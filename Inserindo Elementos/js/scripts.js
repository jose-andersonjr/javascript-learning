// Criar elemento 
let elemento = document.createElement('div')
elemento.classList = 'div-criada' //Na lista de classes do elemento, inserir
console.log(elemento)

let container = document.querySelector('#container')

//Inserindo elemento filho
container.appendChild(elemento)

// inserBefore
let elemento2  = document.createElement('div')
elemento2.classList = 'div-before'

let elemento3 = document.querySelector('#container .div-criada') //Selecionamos esse elemento apenas para usar como estratégica posional

container.insertBefore(elemento2, elemento3) //Insira o elemento 2 antes do elemento 3