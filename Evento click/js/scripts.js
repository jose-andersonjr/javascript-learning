let btn = document.querySelector('#btn')

btn.addEventListener('click', function() {
    console.log('clicou')

    this.style.color = 'red'

})

let title = document.querySelector('#title')
title.addEventListener('click', function (){
    let subtitle = document.querySelector('.subtitle')
    subtitle.style.display = 'none'
})

// doubleclick
let subtitle = document.querySelector('.subtitle')

subtitle.addEventListener('dblclick', function() {
    console.log('click duplo!')
})