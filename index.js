
var local = {
    vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
    ventas: [
      // tener en cuenta que Date guarda los meses del 0 (enero) al 11 (diciembre)
      { id: 1, fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", sucursal: "Centro", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
      { id: 2, fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", sucursal: "Centro", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
      { id: 3, fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", sucursal: "Caballito", componentes: ["Monitor ASC 543", "Motherboard MZI"] },
      { id: 4, fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", sucursal: "Centro", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"] },
      { id: 5, fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", sucursal: "Caballito", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"] }
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
    ],
    sucursales: ['Centro', 'Caballito']
  };
  function crearVentaHTML (venta) {
    const ventaHTML = `
      <li class="venta">
        <div class="fecha">${venta.fecha.getDate()}/${venta.fecha.getMonth() + 1}/${venta.fecha.getFullYear()}</div>
        <div>${ venta.sucursal }</div>
        <div>${ venta.nombreVendedora }</div>
        <div>${ venta.componentes }</div>
        <div>${ precioMaquina(venta.componentes) }</div>
      </li>
    `;
    return ventaHTML;
  }
  
  const ventasHTML = local.ventas.map(crearVentaHTML);
  
  const ul = document.getElementById('ventas');
  
  ul.innerHTML = ventasHTML.join('');
  
  
  function obtenerPrecioDelComponente (nombreComponente) {
   
    const componente = local.precios.find(function (p) {
      return p.componente === nombreComponente;
    })
    return componente.precio;
  }
  
  function precioMaquina (componentes) {
    let total = 0;
  
    // solución imperativa
    // for (let j = 0; j < componentes.length; j++) {
    //   total += obtenerPrecioDelComponente( componentes[j] );
    // }
  
    // solución declarativa
    componentes.forEach(c => total += obtenerPrecioDelComponente( c ));
  
    return total;
  }
  
  
  
//Parte 1

//1 precioMaquina(componentes): recibe un array de componentes y devuelve el precio de la máquina que se puede armar con esos componentes, que es la suma de los precios de cada componente incluido.
/* function precioMaquina(componentes) {
    let precioTotal = 0;

    for (let i = 0; i < componentes.length; i++) {

        for (let z = 0; z < local.precios.length; z++) {
            if (componentes[i] === local.precios[z].componente) {
                precioTotal += local.precios[z].precio

            }
        }

    }
    return precioTotal
} */

/* function precioMaquina (arrayComponentes){

    if(arrayComponentes.length){
    let sumPrecios = [];
    
      arrayComponentes.map(function(cadaComponente){
        local.precios.map(function(precio){
          if(precio.componente === cadaComponente){
            sumPrecios.push(precio.precio)
          }
        })
      })
  
    return sumPrecios.reduce(function(total,suma){ //Este return retorna TODA la función
  
      return total + suma; // Este este return es solo de esta función
    })
  } else{
    
    return 0
  }
    
  } */
/* console.log(precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"]))
 */

//2  cantidadVentasComponente(componente): recibe un componente y devuelve la cantidad de veces que fue vendido, o sea que formó parte de una máquina que se vendió. La lista de ventas no se pasa por parámetro, se asume que está identificada por la variable ventas.
/* function cantidadVentasComponente(componente) {
   let cantidadVentas = 0
    for (let i = 0; i < local.ventas.length; i++) {
        console.log(local.ventas[i].componentes)
        for (let j = 0; j < local.ventas[i].componentes.length; j++) {
           
            if (componente === local.ventas[i].componentes[j]) {

                cantidadVentas++
            }

        }

    } return cantidadVentas
}
 */
const cantidadVentasComponente=(componenteUnitario)=> { 
return local.ventas
.map(venta=>venta.componentes)
.flat()
.filter(componenteVendido=>componenteVendido===componenteUnitario)
.length

};
console.log('hola')
console.log(cantidadVentasComponente("Monitor GPRS 3000")); // 2
/* function cantidadVentasComponente(componente){

    let i = 0;
  
    local.ventas.map(function(cadaVenta){
  
       cadaVenta.componentes.map(function(cadaComponente){
  
         if(componente === cadaComponente){
           i++;
         }
       })
    })
  
    return i;
  } */
  

//3 vendedoraDelMes(mes, anio), se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la vendedora que más vendió en plata en el mes. O sea no cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica la función precioMaquina. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).

console.log('vendedora del mes:')
 function vendedoraDelMes(mes, anio) {
    let arrayVendedoras = [];
     for (let i = 0; i < local.vendedoras.length; i++) {
        let vendorasObj = {
            nombre: local.vendedoras[i],
            ventas: 0,       }
       for (let j = 0; j < local.ventas.length; j++) {
             if (local.ventas[j].fecha.getMonth() + 1 == mes && local.ventas[i].fecha.getFullYear() == anio) {
             let precioComponentes = precioMaquina(local.ventas[j].componentes)
                if (local.vendedoras[i] === local.ventas[j].nombreVendedora) {
                     if (vendorasObj.nombre === local.ventas[j].nombreVendedora) {
                         vendorasObj.ventas = vendorasObj.ventas + precioComponentes;
                     }
                }
            }
         }
         arrayVendedoras.push(vendorasObj)
    }

     let mejorVendedora;
   let ventaMax = 0;

     for (let k = 0; k < arrayVendedoras.length; k++) {
         if (arrayVendedoras[k].ventas) {
            ventaMax = arrayVendedoras[k].ventas;
             mejorVendedora = arrayVendedoras[k].nombre;
            return mejorVendedora
         }
    }
 }
 console.log( vendedoraDelMes(1, 2019) )

//4
/* ventasMes(mes, anio): Obtener las ventas de un mes. ventasMes(mes, anio): Obtener las ventas de un mes. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).*/

function ventasMes(mes, anio) {
    let ventasDeUnMes = 0;
    for (let i = 0; i < local.ventas.length; i++) {
        if ((mes == (local.ventas[i].fecha.getMonth() + 1)) && (anio == local.ventas[i].fecha.getFullYear())) {
            ventasDeUnMes += precioMaquina(local.ventas[i].componentes);
        }
    }
    return ventasDeUnMes
}

console.log(ventasMes(1, 2019))
console.log(ventasMes(2,2019))
//5
//ventasVendedora(nombre): Obtener las ventas totales realizadas por una vendedora sin límite de fecha.

function ventasVendedora(vendedora) {
    let totalVentas = 0
    for (let i = 0; i < local.ventas.length; i++) {
        if (vendedora === local.ventas[i].nombreVendedora) {
            totalVentas += precioMaquina(local.ventas[i].componentes);
        }
    }
    return totalVentas
}

console.log(ventasVendedora("Grace"));
//6
// componenteMasVendido(): Devuelve el nombre del componente que más ventas tuvo historicamente. El dato de la cantidad de ventas es el que indica la función cantidadVentasComponente

function componenteMasVendido() {
  let dato = local.precios[1].componente

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
function huboVentas (mes, anio) {
   return ventasMes(mes, anio) > 0;
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

for (let i = 0; i < nuevaInformacion.length; i++) {
    local.ventas.push(nuevaInformacion[i])
}
console.log(local.ventas)

// Crear la función ventasSucursal(sucursal), que obtiene las ventas totales realizadas por una sucursal sin límite de fecha.
//2.4
function ventasSucursal(sucursal) {
   let ventasTotales = 0
    for (let i = 0; i < local.ventas.length; i++) {
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
    let S1 = 'Centro';
    let S2 = 'Caballito';
    let sDelMes = ''
    let ventasS1 = 0
    let ventasS2 = 0


    for (let i = 0; i < local.ventas.length; i++) {
        if ((mes == local.ventas[i].fecha.getMonth() + 1) && (anio == local.ventas[i].fecha.getFullYear()) && (S1 == local.ventas[i].sucursal)) {
            ventasS1 += precioMaquina(local.ventas[i].componentes);
        }
    }
    for (let j = 0; j < local.ventas.length; j++) {
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

//renderPorMes(): Muestra una lista ordenada del importe total vendido por cada mes/año

   function renderPorMes() {
    
    let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
let mesesNum= [1,2,3,4,5,6,7,8,9,10,11,12]
let porMes= 0 

for (let i= 0; i< meses.length; i++) {
    
     let porMes= console.log('Total de '+ meses[i] + ': ' + ventasMes(mesesNum[i], 2019));
}
    return porMes   
    
}


console.log(renderPorMes());
//renderPorSucursal(): Muestra una lista del importe total vendido por cada sucursal//

function renderPorSucursal(){
let porSucursal=0
    for (let i = 0; i < local.sucursal.length; i++) {
     let porSucursal=   console.log('Total de ' + local.sucursal[i] + ': ' + ventasTotal(local.sucursal[i]))
    }
  return porSucursal
 }
 
 console.log(renderPorSucursal() );
