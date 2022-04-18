let numeroAleatorio = (`${Math.floor(Math.random()*100+1)}`)

console.log(`La raiz cuadrada de ${numeroAleatorio} es de ${Math.sqrt(numeroAleatorio)} `)

let potencia = 5

console.log(`El numero ${numeroAleatorio} elevado a la quinta potencia es de: ${Math.pow(numeroAleatorio,potencia)}`)

let listaNumeros = (120,250,78,96,-38,45.72,1450,2380) 
console.log(`El número más alto es: ${Math.max(listaNumeros)}`)

console.log(`El número más bajo es: ${Math.min(120,250,78,96,-38,45.72,1450,2380)}`)


let numeroUno = 45.895025
let numeroDos = 56.788789
let numeroTres = 78.413582

console.log(`Primer número con dos decimales: ${numeroUno.toFixed(2)}`)

console.log(`Segundo número con dos decimales: ${parseFloat(numeroDos.toFixed(2))}`)

console.log(`Tercer número con dos decimales: ${parseFloat(numeroTres.toFixed(2))}`)
