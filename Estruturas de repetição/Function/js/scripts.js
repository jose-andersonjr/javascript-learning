function primeiraFuncao(){
    console.log('Teste de funções')
}

primeiraFuncao()


function dizerNome(nome) {
    console.log('o nome é: ' + nome)
}

dizerNome('José')
dizerNome('Anderson')
dizerNome('Glenn')

let nomeDoBancoDeDados = 'db_siac'

dizerNome(nomeDoBancoDeDados)

function soma(a, b) {
    let soma = a + b
    return soma
}

let somaUm = soma(2, 5)

console.log(somaUm)

var somaDois = soma(5, 5)

console.log(somaDois)

console.log(soma(somaUm, somaDois))
console.log(soma(9, 99))
