

//Console

console.error('Algo deu errado!')
console.warn('Este é um aviso!')
console.log('Esta é uma mensagem')


//Variáveis 
var x = 10

//Definições mais modernas de variável
let y = 15
const z = 20

if(1){
    let y = 55
}

console.log(x)
console.log(y)
console.log(z)

y = 25

console.log(y)

// Tipos de dados
const name = "Matheus"
console.log(name)
console.log(typeof name)


const shirtsQty = 4
console.log(shirtsQty)
console.log(typeof shirtsQty)


const decimal = 12.4
console.log(decimal)
console.log(typeof decimal)

const isApproved = false
console.log(isApproved)
console.log(typeof isApproved)

let username = null 
console.log(username)
console.log(typeof username)

let age
console.log(age)
console.log(typeof age)

age = 30
console.log(age)
console.log(typeof age)

// Listas
const languages = ['JavaScript', 'PHP', 'Python']
console.log(languages)
console.log(typeof languages)

// Objects literals
const user = {email: 'jose.andersonjr@gmail.com', password: 'teste123', age: 30}
console.log(user)
console.log(typeof user)

// Métodos string
const fullName = 'José Anderson'
console.log(fullName.length)

const stringToArray = fullName.split('')
console.log(stringToArray)
console.log(typeof stringToArray)

console.log(fullName.toLowerCase())
console.log(fullName.toUpperCase())
console.log(fullName.indexOf('Anderson'))
console.log(fullName.slice(0, 4))

// Métodos de Array
const list = ['a', 'b', 'c', 'd', 'e']

console.log(list.length)
console.log(list[2])

list[5] = 'f'

console.log(list)

console.log(list[list.length-1])


list.push('g')
console.log(list)

list.pop()
console.log(list[list.length-1])

list.shift()
console.log(list)

list.unshift('a')
console.log(list)

// Objetos
const product = {
    name: 'Camisa',
    price: 15.99,
    inStock: true,
    sizes: ['P', 'M', 'G'],
    'Main color': 'Blue',

}

console.log(product.name)

console.log(product['name'])

console.log['Main color']

// Destructing
const {price, inStock} = product

console.log(price)
console.log(inStock)

const [n1, n2] = list

console.log(n1)
console.log(n2)

// JSON - JavaScript Object Notation

const dog = {
    name: 'Shark',
    age: 10,

}

const json = JSON.stringify(dog)

console.log(json)

const obj = JSON.parse(json)

console.log(obj)

const jsonErrado = '{"name":"teste", "surname":"Testando"}'

console.log(jsonErrado)

const obj2 = JSON.parse(jsonErrado)

console.log(obj2)

// Estruturas condicionais
const a = 10

if(a > 8){
    console.log("A é maior que 8")
}

const b = "sMatheus"

if (b === "João") {
    console.log('O nome é João')
} else if (b === "Pedro"){
    console.log('O nome é Pedro')
} else{
    console.log('Não encontramos o nome desse usuário!')
}

const someNumber = 14

// if ternário

let testingANumber = someNumber < 20 ? 'Yes':'No'
console.log(testingANumber)