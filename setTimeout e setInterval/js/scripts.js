//setTimeout na prática

//O primeiro parâmetro é a função a ser executada e o segundo parâmetro é intervalo de tempo para ser executado.
//Uma função pode ser configurada para ser executada a cada 5segundos
var segundos = 0
console.log('Testando insert serTimeout')

console.log('Antes do setTimeout')
setTimeout(function(){
    
    segundos += 2
    console.log(segundos + ' segundos se passaram...')

}, 2000)
console.log('Depois do setTimeout')
//O setTimeout é um função assíncrona, ela espera a sua condição de tempo para ser executada, não abre junto das outras linhas de comando

setInterval(function(){

    console.log('Testando setInterval')

}, 1000)