//clearTimeout na prática
let x = 0
let myTimer = setTimeout(function (){
    console.log("O x 0 é 0")
}, 1500)

x = 5

if (x > 0) {
    clearTimeout(myTimer)
    console.log('O x passou de 0')
}

// clearSetInterval na prática
let myInterval = setInternal(function () {
    console.log()
})