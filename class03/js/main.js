//ciclos === iteraciones === bucles === loops

// ciclo for: Se utiliza cuando sabemos exactamente cuantas veces se quiere repetir el ciclo
// iterar(repetir) N cantidad de veces una tarea


// desde; hasta; incremento


// for estático

// for(let inicio = 0; inicio <= 10; inicio = inicio + 1){
//     console.log("Iteracion nr:", inicio)
// }

/*
    inicio = unicio + 1
    inicio += 2
    inicio -= 2
    inicio++
    inicio--
 */

// for dinámicos

// let total = +(prompt("Ingresa un numero"))

// // isNaN() funcion

// if(!isNaN(total)){
//     for(let i = 0; i <= total; i++){
//         console.log("Iteracion del ciclo for dinamico nr", inicio)
//     }
// }else{
//     console.log("Error")
// }

// 

// let numeroIngresado = parseInt(prompt("Ingresa un numero"))

// if(!isNaN(numeroIngresado)){
//     for(let i = 1; i <= 10; i++){
//         // let multiplicacion = numeroIngresado * i
//         // console.log(numeroIngresado + "x" + i + "=" + multiplicacion)
//         let multiplicacion = numeroIngresado * i
//         console.log(`${numeroIngresado} x ${i} = ${multiplicacion}`)
//         // AltGr + } = `` --> backticks google + el nombre de su teclado
//     }
// }else{
//     console.log("Error")
// }


// SPOILER ALERT - ARRAYS

const paises = ["eeuu",  "Argentina", "Francia", "Paraguay", "Chile", "Ecuador", "Colombia", "Uruguay", "Brasil" , "Peru", "Venezuela"]
// //                  0         1             2         3          4          5           
// // console.log(paises)
// // console.table(paises)
// // console.log(paises[2])



// for(let i = 0; i < paises.length; i++){
//     console.log(paises[i])
// }

// sentencia break = Sale del ciclo

// for(let i = 0; i < paises.length; i++){
//     if(paises[i] === "Brasil"){
//         break
//     }
//     console.log(paises[i]);
//     // ojo a la posicion del codigo
// }

// sentencia continue = saltea una iteracion

// for(let i = 0; i < paises.length; i++){
//     if(paises[i] === "Francia"){
//         continue
//     }
//     console.log(paises[i])
// }

// ciclo while : No se sabe exactamente cuantas iteraciones se quiere hacer, sino cual condicion.
// se ejecuta 0 o más veces

// let bucle = true

// while(bucle === true){
//     console.log("Hola")
//     bucle = confirm("Queres imprimir hola nuevamente?")
// }

// let login = true

// while(login === true){
//     let user = prompt("Ingrese tu user")
//     let pass = prompt("Ingrese tu pass")
//     let validacion = (user === "Jona" && pass === "messi" )

//     if(validacion){
//         alert(`Bienvenido ${user}`)
//         login = false
//         break
//     }
//     alert("Usuario y/o contraseña incorrecto") 
// }

// do while --> Por lo menos ejecuta 1 vez y despues evaluar la condicion
// 1 o más veces 

//  let condicion = false

//  do{
//     console.log("hola")
//  }while(condicion)


// let condicion = true
// let user = "Jona"
// let passGuardada = "messi"

// do{
//     let pass = prompt("ingrese la pass")
//     if(pass === passGuardada){
//         alert(`Bienvenido ${user}`)
//         condicion = false
//     }else{
//         alert("pass incorrecta")
//     }
// }while(condicion)

let contador = 0
let passGuardada = "messi"


// do{
//     let passIngresada = prompt("Ingresa tu pass").trim()

//     if(passIngresada != passGuardada){
//         contador += 1
//         alert(`Incorrecto, vas ${contador} de 3 intentos`)
//     }
//     if(passGuardada === passIngresada){
//         console.log(`Bienvenido Messi`)
//         break
//     }

// }while(contador < 3)

// switch - estructura de control

let opciones = prompt(`Elegir jugador fav(con numeros): \n
        1- Messi\n
        2- Julian\n
        3- Cuti\n
        4- Dibu\n
        5- De Paul`)

// if(opciones === "1"){
//     console.log("hace tal cosa")
// }else if(opciones === "2"){
//     console.log(first)
// }else{
//     console.log("opcion invalida")
// }

switch(opciones){
    case "1":
        console.log("Seleccionaste a la opcion nr1")
        break
    case "2":
        console.log("Seleccionaste a la opcion nr2")
        break
    case "3":
        console.log("Seleccionaste a la opcion nr3")
        break
    case "4":
        console.log("Seleccionaste a la opcion nr4")
        break
    case "5":
        console.log("Seleccionaste a la opcion nr5")
        break
    default:
        console.log("opcion invalida")
        break     
}















