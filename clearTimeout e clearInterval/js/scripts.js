var x = 0

var myTimer = setTimeout(function(){
    console.log('O x é igual a 0')
}, 2000)

x = 5

if (x >= 0){
    clearTimeout(myTimer)
    console.log('O valor de x é maior que 0')
}

//clearInterval na prática
var myInterval = setInterval(function(){
    console.log('Imprimindo interval')
}, 500)

setTimeout(function() {
    console.log('Não precisamos mais repetir')
    clearInterval(myInterval)
}, 1500)
