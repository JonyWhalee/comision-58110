/*
    obj: clave - valor

    metodos/comportamientos/cosas que se puede hacer y propiedades/atributos/caracteristicas
*/

/*
nombre obj{
    propiedad/atributos: valor
}
*/

/*
estudiantes{
    nombre: facundo
    curso: 2do A
}
*/

let nombre = "Homero"
let apellido = "Simpson"
let edad = 39
let calle = "Av siempreviva 742"


const personajeUno = {
    nombre: "Homero",
    apellido: "Simpson",
    edad: 39,
    calle: "Av siempreviva 742",
    peso: 120
}

const personajeDos = {
    nombre: "Marge",
    apellido: "Bouvier",
    edad: 34,
    calle: "Av siempreviva 742",
    // anidar objs
    hijos: {
        primero: "Bart",
        segundo: "Lisa",
        tercero: "Maggie"
    }
}

// let test = "Jona"

// console.log(test)

// console.log(personajeUno)

// // como mostrar los datos en obj

// console.log(personajeUno.edad) //notacion con punto --> no sirve en casos puntuales
// console.log(personajeDos["apellido"]) //notacion con corchetes


// console.log(personajeDos.hijos.primero)

// // actualizacion de datos

// console.log(`${personajeUno.nombre} pesa ${personajeUno.peso}kg`) //homero pesa 120kg

// personajeUno.peso = 300

// console.log(`El nuevo peso de ${personajeUno.nombre} es de ${personajeUno.peso}kg`) //

// // Creacion de una propiedad

// personajeDos.esCasado = true

// console.log(personajeDos)

// alert

// alert(personajeUno) //parametro pide string

// alert(`Nombre del personaje: ${personajeDos.nombre} \nnombre del ultimo hijo: ${personajeDos.hijos.tercero}`)


// string es un obj --> obk nativo

// metodos y propiedades de los string

// let cadena = "Jonathan"

// //propiedad
// console.log(cadena.length)

// // metodo 
// console.log(cadena.toUpperCase())
// console.log(cadena.toLowerCase())


// // function constructora: molde/plantilla/modelo


// // convencion: Pimera letra de la palabra en MAYUS - Singular

// // Persona - Humano - Pais - Producto

// function Persona(nombre, apellido, edad, calle){
// //  this.atributo = valorParametro
//     this.nombre = nombre
//     this.apellido = apellido
//     this.edad = edad
//     this.calle = calle
//     // metodo
//     this.hablar = function(){
//         console.log(`Hola soy ${this.nombre}`)
//     }
// }

// const personaUno = new Persona("Bart", "Simpson", 19, "Av Siempreviva 742")
// const personaDos = new Persona("Lisa", "Simpson", 8, "Av Siempreviva 742")

// personaUno.hablar()
// // personajeUno.hablar()

// // console.log(personaUno)
// // console.log(personaDos)


// // Operador in --> booleano

// console.log("nombre" in personajeDos) //true
// console.log("colorDePelo" in personaDos) //false

// // personajeDos.colorDePelo = "Azul"

// if(!("colorDePelo" in personajeDos)){
//     console.log("No existe esta propiedad")
// }else{
//     console.log(personajeDos.colorDePelo)
// }

// operador for in 

// nombre - apellido - edad - calle - peso -  
// for (const key in personajeUno) {
//     console.log(`${key}: ${personajeUno[key]}`)
// }
// clave - valor