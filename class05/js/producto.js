// class --> molde mas grande y organizado para crear objs con las mismas caracteristicas

// convencion: singular y 1ra letra en MAYUS
class Producto{

    // atributos/propiedades
    constructor(nombre, precio, categoria){
        this.nombre = nombre.toUpperCase()
        this.precio = parseFloat(precio)
        this.categoria = categoria
        this.vendido = false
    }
    // metodo
    sumarIva(){
        this.precio *= 1.21
        // this.precio = this.precio * 1.21
    }

    vender(){
        this.vendido = true
    }
}

let productoIngresado = prompt("Ingresa el nombre de tu producto")
let precioIngresado = prompt("Ingresa el precio de tu producto")
let categoriaIngresada = prompt("Ingresa la categoria de tu producto")


const productoUno = new Producto(productoIngresado, precioIngresado, categoriaIngresada)

// console.log(productoUno)

// console.log(productoUno.precio) // 100

productoUno.sumarIva()

// console.log(productoUno.precio) // 121


alert(`El precio final del producto ${productoUno.nombre} es de $${productoUno.precio}`)

console.log(`antes de ser vendido ${productoUno.vendido}`)

productoUno.vender()

if(productoUno.vendido === true){
    alert("El producto fue vendido con exito")
}