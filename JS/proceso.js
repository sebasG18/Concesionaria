function PAGO() {
    let Nombre = document.getElementById("nombres").value;
    let Cargo = document.getElementById("Cargo").value;
    let HorasEXT = document.getElementById("horasEXT").value;
    var sueldo;
    switch (Cargo) {
        case "Administrativo":
            sueldo = 700, 00;
            break;
        case "Supervisor":
            sueldo = 650, 00;
            break;
        case "Operario":
            sueldo = 440, 00;
            break;
        case "Control de calidad":
            sueldo = 490, 00;
            break;
    }
    let SueldoF = sueldo + (HorasEXT * 10);
    document.getElementById("IMPRIMIR-EMPLEADO")
        .innerHTML = "Nombre " + Nombre + "Cargo " + Cargo + "SueldoF " + SueldoF;
}

function COTI() {
    let Cedula = document.getElementById("cedulas").value;
    let Nombre = document.getElementById("nombres").value;
    let Apellido = document.getElementById("apellido").value;
    let direccion = document.getElementById("direccion").value;
    let vehiculo = document.getElementById("Vehiculo").value;
    let precio = document.getElementById("Precio").value;
    switch (vehiculo) {
        case "FORD1":
            precio * 0.05;
            break;
        case "FORD2":
            precio * 0.10;
            break;
    }
document.getElementById("Cotizacion")
.innerHTML = "Cedula: " + Cedula + "Nombre " + Nombre + "Apellido" + Apellido + " direccion " + direccion + "vehiculo " + vehiculo;
}