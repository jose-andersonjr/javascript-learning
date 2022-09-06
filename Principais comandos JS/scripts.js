

// //Console

// console.error('Algo deu errado!')
// console.warn('Este é um aviso!')
// console.log('Esta é uma mensagem')


// //Variáveis 
// var x = 10

// //Definições mais modernas de variável
// let y = 15
// const z = 20

// if(1){
//     let y = 55
// }

// console.log(x)
// console.log(y)
// console.log(z)

// y = 25

// console.log(y)

// // Tipos de dados
// const name = "Matheus"
// console.log(name)
// console.log(typeof name)


// const shirtsQty = 4
// console.log(shirtsQty)
// console.log(typeof shirtsQty)


// const decimal = 12.4
// console.log(decimal)
// console.log(typeof decimal)

// const isApproved = false
// console.log(isApproved)
// console.log(typeof isApproved)

// let username = null 
// console.log(username)
// console.log(typeof username)

// let age
// console.log(age)
// console.log(typeof age)

// age = 30
// console.log(age)
// console.log(typeof age)

// // Listas
// const languages = ['JavaScript', 'PHP', 'Python']
// console.log(languages)
// console.log(typeof languages)

// // Objects literals
// const user = {email: 'jose.andersonjr@gmail.com', password: 'teste123', age: 30}
// console.log(user)
// console.log(typeof user)

// // Métodos string
// const fullName = 'José Anderson'
// console.log(fullName.length)

// const stringToArray = fullName.split('')
// console.log(stringToArray)
// console.log(typeof stringToArray)

// console.log(fullName.toLowerCase())
// console.log(fullName.toUpperCase())
// console.log(fullName.indexOf('Anderson'))
// console.log(fullName.slice(0, 4))

// // Métodos de Array
// const list = ['a', 'b', 'c', 'd', 'e']

// console.log(list.length)
// console.log(list[2])

// list[5] = 'f'

// console.log(list)

// console.log(list[list.length-1])


// list.push('g')
// console.log(list)

// list.pop()
// console.log(list[list.length-1])

// list.shift()
// console.log(list)

// list.unshift('a')
// console.log(list)

// Objetos
// const product = {
//     name: 'Camisa',
//     price: 15.99,
//     inStock: true,
//     sizes: ['P', 'M', 'G'],
//     'Main color': 'Blue',

// }

// console.log(product.name)

// console.log(product['name'])

// console.log['Main color']

// // Destructing
// const {price, inStock} = product

// console.log(price)
// console.log(inStock)

// const [n1, n2] = list

// console.log(n1)
// console.log(n2)

// // JSON - JavaScript Object Notation

// const dog = {
//     name: 'Shark',
//     age: 10,

// }

// const json = JSON.stringify(dog)

// console.log(json)

// const obj = JSON.parse(json)

// console.log(obj)

// const jsonErrado = '{"name":"teste", "surname":"Testando"}'

// console.log(jsonErrado)

// const obj2 = JSON.parse(jsonErrado)

// console.log(obj2)

// // Estruturas condicionais
// const a = 10

// if(a > 8){
//     console.log("A é maior que 8")
// }

// const b = "sMatheus"

// if (b === "João") {
//     console.log('O nome é João')
// } else if (b === "Pedro"){
//     console.log('O nome é Pedro')
// } else{
//     console.log('Não encontramos o nome desse usuário!')
// }

// const someNumber = 14

// // if ternário

// let testingANumber = someNumber < 20 ? 'Yes':'No'
// console.log(testingANumber)

//Estruturas de repetição
// const myList = [1, 2, 3, 4, 5]
// let counter = 0

// while (counter < myList.length) {
//     console.log('Imprimindo: ' + myList[counter])
//     counter++
// }

// const mySecondList = ['a', 'b', 'c', 'd', 'e']
// for(let counter = 0; counter < mySecondList.length; counter++){
//     console.log(`Imprimindo: ${mySecondList[counter]}`)  //template literals
// }

// // Métodos de array -> repetição
// const names = ["Matheus", "João", "Pedro", "Maria"]

// names.forEach(function(name) {
//     console.log(`O nome é ${name}`)
// })

// // o map serve para modifcar dados, diferente do forEach que apenas inicia uma estrutura de laço em cima dos items da lista
// const modifiedNames = names.map(function(name) {
//     if (name === 'Matheus') {
//         return name = 'Sr. Matheus'
//     } else{
//         return name
//     }
// })

// console.log(modifiedNames)

// const bigNumbers = [1, 2, 3, 4, 5, 10, 100].filter(function (number) {
//     return number >= 5
// })

// console.log(bigNumbers)

// const sumAll = [10, 20, 30, 40, 50].reduce(function (total, number){
//     return total + number
// })

//console.log(sumAll)

// Funções 
function minhaFuncao(){
    console.log('Olá Função!')
}

minhaFuncao()

function nomeCompleto(nome, sobrenome) {
    return `O nome completo é ${nome} ${sobrenome}`
}

console.log(nomeCompleto('José', 'Anderson'))

// Arrow functions
const myArrowFunction = (a, b) => {
    return a + b
}

console.log(myArrowFunction(2, 5))

const sumAll = [10, 20, 30, 40, 50].reduce((total, number) => {
    return total + number 
})

console.log(sumAll)

const mySimpleArrowFunction = (a, b) => a + b

console.log(mySimpleArrowFunction(5, 5))

// Classes
class Product {
    constructor(name, price){
        this.name = name
        this.price = price

    }

    productDetails() {
        return `O nome do produto é ${this.name} e o preço é ${this.price}`
    }
}

const socks = new Product('Meia branca', 10.99)
const shirt = new Product('Camisa preta', 22.99)

console.log(socks.name)
console.log(socks.price)

console.log(shirt.name)
console.log(shirt.price)

console.log(shirt.productDetails())

//Herança 
class SuperProduct extends Product {
    constructor(name, price, size) {
        super(name, price)
        this.size = size
    }
    showAdjective(adjective) {
        return `O ${this.name} é muito ${adjective}`
    }

    // static - você cria métodos que podem ser usados sem instanciar uma classe antes
    static sayHello() {
        console.log('Hello!')
    }

}

const tenis = new SuperProduct('Tênis vermelho', 55.90, '42')

console.log(tenis.name)
console.log(tenis.size)
console.log(tenis.productDetails())
console.log(tenis.showAdjective('bom'))
SuperProduct.sayHello()

// DOM - Document Object Model
const title = document.getElementById('title')
console.log('title')

// Query selector
const sameTitle = document.querySelector("#title")

console.log(sameTitle)

const texts = document.querySelectorAll('.text')

console.log(texts)
console.log(texts[1])

texts.forEach((text) => {
    console.log(text.textContent.toUpperCase())
})

title.textContent = 'Mudei o texto'

texts[0].innerHTML = '<span> Alteramos o html deste elemento </span>'

texts[1].style.backgroundColor = 'red'

texts[2].classList.add('my-class')

texts[2].classList.remove('text')

texts[3].remove()

// Eventos
const btn = document.querySelector("#btn")
btn.addEventListener("click", function(){
    console.log('Clicou')
})