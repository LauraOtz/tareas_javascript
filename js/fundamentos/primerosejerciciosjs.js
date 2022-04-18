//Tarea nro 6
//Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.


// let primerNumero = prompt("Ingrese un numero")
// let segundoNumero = prompt("Ingrese otro numero")

// console.log(`El número más alto ingresado es:${Math.max(primerNumero,segundoNumero)}`)

//Tarea nro 7
//Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.


// let numeroUno = prompt("Ingrese un numero")
// let numeroDos = prompt("Ingrese otro numero")
// let numeroTres = prompt("Ingrese otro numero")

// console.log(`El número más alto ingresado es:${Math.max(numeroUno,numeroDos,numeroTres)}`)

//Tarea nro 8
//Escribe un programa que pida un número y diga si es divisible por 2

// let numeroIngresado = prompt("Ingrese un numero")

// if (numeroIngresado % 2 === 0) {console.log ("El número es divisible en dos")}
// else {console.log("El número no es divisible en dos")}

//Tarea nro 9 no completada- completar
//Escribe un programa que pida una frase y escriba las vocales que aparecen

// let fraseIngresada = prompt("Ingrese una frase")

// let word = fraseIngresada.toLowerCase()
// if (/[aeiou]/.test(word)) {
//    console.log(true) 
// } else {console.log(false)}


//Tarea 10
//Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

// let numeroIngresado = prompt("Ingrese un numero")

// if (numeroIngresado % 2 === 0) {console.log ("El número es divisible en dos")}
// else if (numeroIngresado % 3 === 0) {console.log ("El número es divisible en tres")} 
// else if (numeroIngresado % 5 === 0) {console.log ("El número es divisible en cinco")} 
// else if (numeroIngresado % 7 === 0) {console.log ("El número es divisible en siete")}



// tarea 11
//Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

let numeroIngresado = prompt("Ingrese un numero")

if (numeroIngresado % 2 === 0  && numeroIngresado % 5 ===0) {console.log ("El número es divisible en dos y por cinco")}
else if (numeroIngresado % 2 === 0) {console.log ("El número es divisible en dos")}
else if (numeroIngresado % 5 === 0) {console.log ("El número es divisible en cinco")} 
else if (numeroIngresado % 3 === 0 && numeroIngresado % 7 ===0) {console.log ("El número es divisible en tres y en siete")} 
else if (numeroIngresado % 3 === 0) {console.log ("El número es divisible en tres")} 
else if (numeroIngresado % 7 === 0) {console.log ("El número es divisible en siete")}