// cajero automatico

/*
    * login --> 3 intentos 
    * saber sueldo - retirar - depósitar - salir
    * saludar
*/
/*
    i++ --> i = i + 1
    i+= 2 --> i = i + 2
    i-- --> i = i - 1
*/

let passGuardada = "1234"

// funciones anonimas

const login = () =>{
    let ingresar = false

    for(let i = 3;i > 0 ; i--){
        let passIngresada = prompt(`Ingresa tu contraseña. Tines ${i} intentos`)

        if(passIngresada === passGuardada){
            alert("El login fue exitoso!")
            ingresar = true
            break
        }else{
            alert("Contraseña incorrecta")
        }
    }

    return ingresar
}

if(login()){
    let saldo = 50000
    let opcion = prompt(`Elegi una opcion:
                        \n 1- Saldo
                        \n 2- Retirar efectivo
                        \n 3- Depósitar 
                        \n Escribe "ESC" para salir`).toUpperCase()
    while(opcion != "ESC"){
        switch(opcion){
            case "1":
                alert(`Tu saldo actual es de $${saldo}`)
                break
            case "2":
                let retirar = +(prompt("Ingresa tu monto a retirar"))

                if(isNaN(retirar)){
                    alert("Error debe ingresar numeros")
                }else{
                    if(retirar <= saldo){
                        saldo -= retirar
                        // saldo = saldo - retirar
                        alert(`Retiro exitoso. Tu saldo actual es de ${saldo}`)
                    }else{
                        alert("Fondos insuficientes")
                    }
                }
                break
            case "3":
                let depositar = +(prompt("Ingresa tu monto a depósitar"))

                if(isNaN(depositar)){
                    alert("Error debe ingresar numeros")
                }else{
                    saldo += depositar
                    alert(`Depósito exitoso. Tu saldo actual es de ${saldo}`)
                }
                break
            default:
                alert("Opcion invalida")
                break
        }

        opcion = prompt(`Elegi una opcion:
                        \n 1- Saldo
                        \n 2- Retirar efectivo
                        \n 3- Depósitar 
                        \n Escribe "ESC" para salir`).toUpperCase()
    }
}else{
    console.log("Bloqueamos tu tarjeta por seguridad")
}
