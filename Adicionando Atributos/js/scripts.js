//Adicionar atributo
let title = document.querySelector('#title')
title.setAttribute('class', 'testando-atributo')
console.log(title)

let btn = document.querySelector('button')
btn.setAttribute('class', 'btn')

//Remover atributo
let lista = document.querySelector('#lista')
lista.removeAttribute('id')