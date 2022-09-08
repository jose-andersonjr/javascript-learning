// length
let arr = [1, 2, 3, 4, 5]
console.log(arr)

// push
arr.push(6)
console.log(arr)
arr.push('qUALQUER COISA')
console.log(arr)

// pop
arr.pop()
console.log(arr)

// unshift
arr.unshift(0)
console.log(arr)

// shift
arr.shift()
console.log(arr)

// acessar o último elemento de um array
console.log(arr[arr.length-1])

// isArray
console.log(Array.isArray(5))
console.log(Array.isArray(arr))

// splice
let arr2 = [1, 2, 3, 4, 5]
arr2.splice(2, 0, 999)
console.log(arr2)
arr2.splice(4, 1)
console.log(arr2)

// indexOf
console.log(arr2.indexOf(5))

// join

let arr3 = ['O', 'rato', 'roeu', 'a', 'roupa', 'do', 'rei', 'de', 'Roma']
console.log(arr3.join(' '))
console.log(arr3.join(','))

//reverse
console.log(arr3.reverse())



