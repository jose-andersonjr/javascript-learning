// length
let nome = 'Anderson'
console.log(nome.length)

let obj = 'bola'
console.log(obj.length)

// indexOf
console.log(nome[2])

let frase = 'Lorem Ipsom'
console.log(frase.indexOf("Ipsom"))

// slice

let ipsom = frase.slice(6, 11)
console.log(ipsom)

// replace
<<<<<<< HEAD
 let novaFrase = frase.replace('Ipsom', 'Epsom')
 console.log(novaFrase)
=======
 let novaFrase = frase.replace('Ipsom', 'Epsom')
 console.log(novaFrase)

// toLowerCase

let fraseNormal = 'Esta é a frase que vamos manipular'

let fraseCaixaAlta = fraseNormal.toUpperCase()
console.log(fraseNormal)
console.log(fraseCaixaAlta)
console.log(fraseCaixaAlta.toLowerCase())

// trim

let nome2 = '            José              '
let nome2Trim = nome2.trim()
console.log(nome2)
console.log(nome2Trim)

// split
console.log(fraseNormal.split(' '))
let tags = 'PHP, JavaScript, HTML, CSS'
console.log(tags.split(', '))

// lastIndexOf

let frase3 = 'Eu quero a última palavra teste desta frase de teste'

console.log(frase3.indexOf('teste'))
console.log(frase3.lastIndexOf('teste'))

>>>>>>> 90a679080e5bdc365b3222753b75daeab44c035a
