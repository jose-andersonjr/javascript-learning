// Selecionar o elemento

let title = document.querySelector('#title')
console.log(title)


// innerHTML
title.innerHTML = 'Testando texto alterado!'

// textContent - > mais utilizado
let subtitle = document.querySelector('.subtitle')
subtitle.textContent = 'Testando o text content'