// ej: manejar un auto

/*
    Primera vez aprendiendo a manejar. Instruciones

    cinturon

    asegurarte de que este en nuetro

    poner la llave

    girar la llave

    ...

    ...

    ...
 */

// otros ejs: preparar un cafe - escribir - respirar - andar en bici: acciones | verbos


/*
Principio DRY: "don´t repeat yourself - no te repitas" 

Principio KISS: "keep it simple, stupid - mantenlo simple, estúpido" 
    // paradigma: divide y vencerás
        
Principio YAGNI: "you aren’t gonna need it - No vas a necesitarlo" 
*/

// declaracion
// function saludar(){
//     console.log("Hola")
// }

// // llamadas - invocarlas - ejecutarlas
// saludar()

// Funciones nativas de js o browser

/*
    alert() --> nativas de js
    parseInt() --> nativas de js
    prompt() --> nativas de js
    console.log() --> nativa del browser
*/

// function isNativeFunction (fn) {
//     const str = fn.toString ();
//     return typeof (fn) === 'function' &&
//             /\{\s*\[\s*native code\s*\]\s*\}$/.test (str) &&
//             str.includes (fn.name);
// }

// declaracion
// function saludar(){
//     console.log("Hola")
// }

// // llamadas - invocarlas - ejecutarlas

// for (let i = 0; i < 3; i++) {
//     saludar()
// }

// parametros

// let nombreIngresado = "Jonathan"
// let apellidoIngresado = "Romero"

// function saludarConNombre(nombre, apellido){
//     console.log(`Hola ${nombre} ${apellido}`)
// }

// saludarConNombre(nombreIngresado, apellidoIngresado)

// 

// function sumarDosNumeros(numeroA, numeroB){
//     let resultado = numeroA + numeroB
//     console.log(resultado)
// }

// let x = +(prompt("Ingresa un numero"))
// let y = +(prompt("Ingresa otro numero"))

// //isNotANumber

// if((!isNaN(x)) && (!isNaN(y))){
//     sumarDosNumeros(x ,y)
// }else{
//     console.log("error")
// }


// No poner "mostrar con el clg dentro de la funcion"

// function sumarDosNumeros(a ,b){
//     let resultado = a + b
//     return resultado
// }

// console.log(sumarDosNumeros(20, 40))

// calculadora

// function calculadora(a, b, operador){
//     switch(operador){
//         case "+":
//             return a + b //todo lo que sigue despues del return, no se va a ejecutar
//         case "-":
//             return a - b
//         case "*":
//             return a * b
//         case "/":
//             return a / b
//     }
// }

// console.log(calculadora(40, 60, "*"))

// scope: global y local

// let numero = 10 //global

// for (var i = 0; i < 2; i++) {   
//     console.log(numero) 
//     var i = 20 
// }

// console.log(i)

// function test(){
//     var i = 20
//     return i
// }
// console.log(test())


// funciones anonimas --> info sobre el hoisting

// sintaxis
const sumar = function(a,b){
    return a + b
}

// console.log(sumar(10,30))


// funciones flechas | arrow function

const restar = (a, b) =>{
    return a - b
}

// // simplificar mucho mas el codigo

// // return implicito -  explicito
// const multiplicacion = (a,b) => a * b

// const saludar = x => `hola ${x}`

// ejemplo de compra

const suma = (a, b) => a + b
const iva = x => x * .21 // --> (n*21)/100

let precioProducto = 15000

let precioFinal = suma(iva(precioProducto), precioProducto)

console.log(`Subtotal: $${precioProducto}. Total: $${precioFinal}`)