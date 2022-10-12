const productos = [
    { id: 0, nombre: "karambit", precio: 25, stock: 22 },
    { id: 1, nombre: "Gut", precio: 30, stock: 13 },
    { id: 2, nombre: "Flip", precio: 35, stock: 9 },
    { id: 3, nombre: "Bayonet", precio: 40, stock: 7 },
    { id: 4, nombre: "M9 Bayonet", precio: 45, stock: 5 },
    { id: 5, nombre: "Huntsman", precio: 50, stock: 0 },
    { id: 6, nombre: "Stiletto", precio: 55, stock: 5 },
    { id: 7, nombre: "Butterfly", precio: 60, stock: 5 },
    { id: 8, nombre: "Falchion", precio: 65, stock: 3 },
    { id: 9, nombre: "Shadow", precio: 70, stock: 2 },
    { id: 10, nombre: "Bowie", precio: 75, stock: 0 },
    { id: 11, nombre: "Talon", precio: 80, stock: 7 },
    { id: 12, nombre: "Navaja", precio: 85, stock: 3 },
    { id: 13, nombre: "Ursus", precio: 100, stock: 1 }
]

var carrito = [
    { id: 0, cantidad: 0, preciototal: 0 },
    { id: 1, cantidad: 0, preciototal: 0 },
    { id: 2, cantidad: 0, preciototal: 0 },
    { id: 3, cantidad: 0, preciototal: 0 },
    { id: 4, cantidad: 0, preciototal: 0 },
    { id: 5, cantidad: 0, preciototal: 0 },
    { id: 6, cantidad: 0, preciototal: 0 },
    { id: 7, cantidad: 0, preciototal: 0 },
    { id: 8, cantidad: 0, preciototal: 0 },
    { id: 9, cantidad: 0, preciototal: 0 },
    { id: 10, cantidad: 0, preciototal: 0 },
    { id: 11, cantidad: 0, preciototal: 0 },
    { id: 12, cantidad: 0, preciototal: 0 },
    { id: 13, cantidad: 0, preciototal: 0 }
];

const codigoDesc = "midescuento";

function descuento() {
    let codigo = false;
    for (let i = 2; i >= 0; i--) {
        let ingresoDesc = prompt("Ingrese el codigo de descuento. \nTienes " + (i + 1) + " intentos.");
        if (ingresoDesc === codigoDesc) {
            alert("Felicidades, a obtenido un descuento del 10% en cualquiera de nuestros productos.")
            codigo = true;
            break;
        }   else {
            alert("Codigo incorrecto.")
        }
    }
    if (codigo == false) {
        alert("Se te acabaron los intentos.");
    }
    return codigo;
}

function AgregarCarrito() {
    let porcentaje = 1.0;
    if(descuento())
        porcentaje = 0.9;
    
    let opcionCuchillo = prompt("Opciones: \n"+productos.filter(item => item.stock > 0).map(item => (item.id+1)+". Cuchillo: "+item.nombre+" Precio: $"+item.precio
    +" Stock: "+(item.stock-carrito[item.id].cantidad)).join("\n") +"\n\nCarrito:\n"+carrito.filter(item => item.cantidad > 0).map(item => "Cuchillo: "+productos[item.id].nombre
    +" Cantidad: "+item.cantidad).join("\n")) - 1;
    if (productos[opcionCuchillo].stock - carrito[opcionCuchillo].cantidad > 0) {
        carrito[opcionCuchillo].cantidad++;
        carrito[opcionCuchillo].preciototal += productos[opcionCuchillo].precio * porcentaje;
        alert("Has elegido el cuchillo " + productos[opcionCuchillo].nombre +"\ncon un Precio de " + productos[opcionCuchillo].precio * porcentaje + " usd");
    } else {
        alert("No hay mas stock del cuchillo: " + productos[opcionCuchillo].nombre);
    }
}

function Comprar() {
    alert("Felicitaziones compraste:\n"+carrito.filter(item => item.cantidad > 0).map(item => "Cuchillo: "+productos[item.id].nombre+" Cantidad: "+item.cantidad
    +" Precio Unitario: $"+productos[item.id].precio+" Precio Total: $"+item.preciototal+" (Descontado: $"+(productos[item.id].precio*item.cantidad-item.preciototal)+")").join("\n"));
}

document.addEventListener("DOMContentLoaded", function(event) {
    let nombreIngresado = prompt("Ingresa tu nombre de usuario");
    do {
        if(nombreIngresado != ""){
            alert("Usuario Valido" +"\nBienvenido: "+ nombreIngresado)
        }else{
            alert("Error" + "\nNo ha ingresado ningun nombre de Usuario")
        }
    } while(nombreIngresado == "")
});



