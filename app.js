//Tarea nro 6

// let primerNumero = prompt("Ingrese un numero")
// let segundoNumero = prompt("Ingrese otro numero")

// console.log(`El número más alto ingresado es:${Math.max(primerNumero,segundoNumero)}`)

//Tarea nro 7

// let numeroUno = prompt("Ingrese un numero")
// let numeroDos = prompt("Ingrese otro numero")
// let numeroTres = prompt("Ingrese otro numero")

// console.log(`El número más alto ingresado es:${Math.max(numeroUno,numeroDos,numeroTres)}`)

//Tarea nro 8
// let numeroIngresado = prompt("Ingrese un numero")

// if (numeroIngresado % 2 === 0) {console.log ("El número es divisible en dos")}
// else {console.log("El número no es divisible en dos")}

//Tarea nro 9

// let fraseIngresada = prompt("Ingrese una frase")

// let word = fraseIngresada.toLowerCase()
// if (/[aeiou]/.test(word)) {
//    console.log(true) 
// } else {console.log(false)}


//Tarea 10

// let numeroIngresado = prompt("Ingrese un numero")

// if (numeroIngresado % 2 === 0) {console.log ("El número es divisible en dos")}
// else if (numeroIngresado % 3 === 0) {console.log ("El número es divisible en tres")} 
// else if (numeroIngresado % 5 === 0) {console.log ("El número es divisible en cinco")} 
// else if (numeroIngresado % 7 === 0) {console.log ("El número es divisible en siete")}



// tarea 11
let numeroIngresado = prompt("Ingrese un numero")

if (numeroIngresado % 2 === 0  && numeroIngresado % 5 ===0) {console.log ("El número es divisible en dos y por cinco")}
else if (numeroIngresado % 2 === 0) {console.log ("El número es divisible en dos")}
else if (numeroIngresado % 5 === 0) {console.log ("El número es divisible en cinco")} 
else if (numeroIngresado % 3 === 0 && numeroIngresado % 7 ===0) {console.log ("El número es divisible en tres y en siete")} 
else if (numeroIngresado % 3 === 0) {console.log ("El número es divisible en tres")} 
else if (numeroIngresado % 7 === 0) {console.log ("El número es divisible en siete")}