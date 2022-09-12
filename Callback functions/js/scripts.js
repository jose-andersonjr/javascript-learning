//Permite executar uma função depois de uma ação

//A função exibir está recebendo o return das funções som a emultiplicacao
function exibir(numero){
    console.log('A operação resultou em: ' + numero)
}

function soma(a, b, cb){
    var resultado = a + b
    cb(resultado)
}

function multiplicacao(a, b, cb){
    var resultado = a * b
    cb(resultado)
}

soma(2, 2, exibir)

multiplicacao(2, 4, exibir) //Callback é a chamada de uma função usando o resultado de outra
