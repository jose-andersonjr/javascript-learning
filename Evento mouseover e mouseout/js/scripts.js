// Evento mouseover

let title = document.querySelector('#title')

title.addEventListener('mouseover', function (){
    this.style.backgroundColor = 'yellow'
    let hide = document.querySelector('.hide')
    console.log(hide)
    hide.className = hide.className.replace('hide', 'show')
    
})

title.addEventListener('mouseout', function() {
    this.style.backgroundColor = 'white'
    this.textContent = 'Título principal'
})

title.addEventListener('click', function(){
    this.textContent = 'Thiago'
})

let btn = document.querySelector('#btn-teste')
btn.addEventListener('dblclick', function(){
    let bodyjs = document.querySelector('body')
    bodyjs.style.backgroundColor = 'black'
})

let btn_clica_em_mim = document.querySelector('#btn')
btn_clica_em_mim.addEventListener('dblclick', function() {
    let bodyjs = document.querySelector('body')
    bodyjs.style.backgroundColor = 'white'
})
