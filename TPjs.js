var local = {
    vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],

    ventas: [
        { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
        { fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
        { fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"] },
        { fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"] },
        { fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"] }
    ],

    precios: [
        { componente: "Monitor GPRS 3000", precio: 200 },
        { componente: "Motherboard ASUS 1500", precio: 120 },
        { componente: "Monitor ASC 543", precio: 250 },
        { componente: "Motherboard ASUS 1200", precio: 100 },
        { componente: "Motherboard MZI", precio: 30 },
        { componente: "HDD Toyiva", precio: 90 },
        { componente: "HDD Wezter Dishital", precio: 75 },
        { componente: "RAM Quinston", precio: 110 },
        { componente: "RAM Quinston Fury", precio: 230 }
    ]
};
//Parte 1

//1
function precioMaquina(params) {
    let precioTotal = 0;

    for (let i = 0; i < params.length; i++) {

        for (let z = 0; z < local.precios.length; z++) {
            if (params[i] === local.precios[z].componente) {
                precioTotal += local.precios[z].precio

            }
        }

    }
    return precioTotal
}

console.log(precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"]))


//2
function cantidadVentasComponente(componente) {
    var cantidadVentas = 0
    for (let i = 0; i < local.ventas.length; i++) {
        console.log(local.ventas[i].componentes)
        for (let j = 0; j < local.ventas[i].componentes.length; j++) {
            //console.log( local.ventas[i].componentes[j])
            if (componente === local.ventas[i].componentes[j]) {

                cantidadVentas++
            }

        }

    } return cantidadVentas
}
console.log(cantidadVentasComponente("Monitor ASC 543")); // 2

//3
function vendedoraDelMes(mes, anio) {
    var ventasAda = 0
    var ventasGrace = 0
    for (let i = 0; i < local.ventas.length; i++) {
        if (local.ventas[i].fecha.getMonth() + 1 == mes && local.ventas[i].fecha.getFullYear() == anio) {
            if (local.ventas[i].nombreVendedora === 'Ada') {
                ventasAda += precioMaquina(local.ventas[i].componentes)
            }
            else if ((local.ventas[i].nombreVendedora === 'Grace')) {
                ventasGrace += precioMaquina(local.ventas[i].componentes)
            }

        }

        if (ventasGrace > ventasAda) {
            return 'Grace'
        } else {
            return 'Ada'


        }
    }
}
console.log(vendedoraDelMes(1, 2019))

//4
/* ventasMes(mes, anio): Obtener las ventas de un mes. */

function ventasMes(mes, anio) {
    var ventasDeUnMes = 0;
    for (let i = 0; i < local.ventas.length; i++) {
        if ((mes == (local.ventas[i].fecha.getMonth() + 1)) && (anio == local.ventas[i].fecha.getFullYear())) {
            ventasDeUnMes += precioMaquina(local.ventas[i].componentes);
        }
    }
    return ventasDeUnMes
}

console.log(ventasMes(1, 2019))
//5
//ventasVendedora(nombre): Obtener las ventas totales realizadas por una vendedora sin límite de fecha.

function ventasVendedora(vendedora) {
    var totalVentas = 0
    for (let i = 0; i < local.ventas.length; i++) {
        if (vendedora == local.ventas[i].nombreVendedora) {
            totalVentas += precioMaquina(local.ventas[i].componentes);
        }
    }
    return totalVentas
}

console.log(ventasVendedora("Grace"));
//6
// componenteMasVendido(): Devuelve el nombre del componente que más ventas tuvo historicamente. El dato de la cantidad de ventas es el que indica la función cantidadVentasComponente

function componenteMasVendido() {
    var dato = local.precios[1].componente

    for (let i = 0; i < local.precios.length; i++) {
        if (cantidadVentasComponente(local.precios[i].componente) > cantidadVentasComponente(dato)) {
            dato = local.precios[i].componente
        }

    }
return dato

}
console.log (componenteMasVendido())


//7
//huboVentas(mes, anio): que indica si hubo ventas en un mes determinado.
function huboVentas(mes, anio) {
    return ventasMes(mes, anio) > 0 ? true : false

}
console.log(huboVentas(3, 2019)); // false
console.log(huboVentas(1, 2019)); // true
console.log(huboVentas(2, 2019)); // true
//parte 2
/*   Como se abrió una nueva sucursal en Caballito, ahora los datos de las ventas también tienen el nombre de la sucursal en la cual se realizó. Por ejemplo: { fecha: new Date(2019, 1, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: 'Centro' }. Por este cambio, se pide:
//2.1
En las ventas ya existentes, tenemos que agregar la propiedad sucursal con el valor Centro (ya que es la sucursal original). */
for (let i = 0; i < local.ventas.length; i++) {
    local.ventas[i].sucursal = 'Centro'
    console.log(local.ventas)
}

//2.2
// Agregar al objeto principal la propiedad sucursales: ['Centro', 'Caballito']
local.sucursal = ['Centro', 'Caballito']
console.log(local)

//2.3
/*  Cargar la siguiente información en el array ventas, creando sus respectivos objetos siguiendo el patrón: fecha, nombreVendedora, componentes, sucursal */

let nuevaInformacion = [
    { fecha: new Date(2019, 2, 12), nombreVendora: 'Hedy', componentes: ['Monitor GPRS 3000', 'HDD Toyiva'], sucursal: 'Centro' },
    { fecha: new Date(2019, 2, 24), nombreVendora: 'Sheryl', componentes: ['Motherboard ASUS 1500', 'HDD Wezter Dishital'], sucursal: 'Caballito' },
    { fecha: new Date(2019, 2, 1), nombreVendedora: 'Ada', componentes: ['Motherboard MZI', 'RAM Quinston Fury'], sucursal: 'Centro' },
    { fecha: new Date(2019, 2, 11), nombreVendedora: 'Grace', componentes: ['Monitor ASC 543', 'RAM Quinston'], sucursal: 'Caballito' },
    { fecha: new Date(2019, 2, 15), nombreVendedora: 'Ada', componentes: ['Motherboard ASUS 1200', 'RAM Quinston Fury'], sucursal: 'Centro' },
    { fecha: new Date(2019, 2, 12), nombreVendedora: 'Hedy', componentes: ['Motherboard ASUS 1500', 'HDD Toyiva'], sucursal: 'Caballito' },
    { fecha: new Date(2019, 2, 21), nombreVendedora: 'Grace', componentes: ['Motherboard MZI', 'RAM Quinston'], sucursal: 'Centro' },
    { fecha: new Date(2019, 2, 8), nombreVendedora: 'Sheryl', componentes: ['Monitor ASC 543', 'HDD Wezter Dishital'], sucursal: 'Centro' },
    { fecha: new Date(2019, 2, 16), nombreVendedora: 'Sheryl', componentes: ['Monitor GPRS 3000', 'RAM Quinston Fury'], sucursal: 'Centro' },
    { fecha: new Date(2019, 2, 27), nombreVendedora: 'Hedy', componentes: ['Motherboard ASUS 1200', 'HDD Toyiva'], sucursal: 'Caballito' },
    { fecha: new Date(2019, 2, 22), nombreVendedora: 'Grace', componentes: ['Monitor ASC 543', 'HDD Wezter Dishital'], sucursal: 'Centro' },
    { fecha: new Date(2019, 2, 5), nombreVendedora: 'Ada', componentes: ['Motherboard ASUS 1500', 'RAM Quinston'], sucursal: 'Centro' },
    { fecha: new Date(2019, 2, 1), nombreVendedora: 'Grace', componentes: ['Motherboard MZI', 'HDD Wezter Dishital'], sucursal: 'Centro' },
    { fecha: new Date(2019, 2, 7), nombreVendedora: 'Sheryl', componentes: ['Monitor GPRS 3000', 'RAM Quinston'], sucursal: 'Caballito' },
    { fecha: new Date(2019, 2, 14), nombreVendedora: 'Ada', componentes: ['Motherboard ASUS 1200', 'HDD Toyiva'], sucursal: 'Centro' },
]

for (var i = 0; i < nuevaInformacion.length; i++) {
    local.ventas.push(nuevaInformacion[i])
}
console.log(local.ventas)

// Crear la función ventasSucursal(sucursal), que obtiene las ventas totales realizadas por una sucursal sin límite de fecha.
//2.4
function ventasSucursal(sucursal) {
    var ventasTotales = 0
    for (var i = 0; i < local.ventas.length; i++) {
        if (sucursal == local.ventas[i].sucursal) {
            ventasTotales += precioMaquina(local.ventas[i].componentes)
        }
    }
    return ventasTotales
}
console.log(ventasSucursal("Centro")); // 4195
//2.5
/* Las funciones ventasSucursal y ventasVendedora tienen mucho código en común, ya que es la misma funcionalidad pero trabajando con una propiedad distinta. Entonces, ¿cómo harías para que ambas funciones reutilicen código y evitemos repetir? */
 function ventasTotal(parametro) {
  let total = 0
    for (let i = 0; i < local.ventas.length; i++) {
       
        if (parametro === local.ventas[i].sucursal||parametro===local.ventas[i].nombreVendedora) {
           total += precioMaquina(local.ventas[i].componentes);
        }
    }
    return total
} 
console.log(ventasTotal('Centro'))

//2.6
/* Crear la función sucursalDelMes(mes, anio), que se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la sucursal que más vendió en plata en el mes. No cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica la función precioMaquina. */

function sucursalDelMes(mes, anio) {
    var S1 = 'Centro';
    var S2 = 'Caballito';
    var sDelMes = ''
    var ventasS1 = 0
    var ventasS2 = 0


    for (var i = 0; i < local.ventas.length; i++) {
        if ((mes == local.ventas[i].fecha.getMonth() + 1) && (anio == local.ventas[i].fecha.getFullYear()) && (S1 == local.ventas[i].sucursal)) {
            ventasS1 += precioMaquina(local.ventas[i].componentes);
        }
    }
    for (var j = 0; j < local.ventas.length; j++) {
        if ((mes == local.ventas[j].fecha.getMonth() + 1) && (anio == local.ventas[j].fecha.getFullYear()) && (S2 == local.ventas[j].sucursal)) {
            ventasS2 += precioMaquina(local.ventas[j].componentes);
        }
    }
    if (ventasS1 > ventasS2) {
        sDelMes = S1;
    } else {
        sDelMes = S2;
    }
    return sDelMes
}
console.log(sucursalDelMes(1, 2019)); // "Centro"

