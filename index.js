
const local = {
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

  // funcion que hace visible el modal
const abrirModalNuevaVenta = () => {
  // document.querySelector("#modal-nueva-venta").style.display = "block";
  document.querySelector("#modal-nueva-venta").classList.add("active");
};
document.querySelector(".btn-agregar-venta").onclick = abrirModalNuevaVenta;
// funcion que esconde el modal
const cerrarModal = () => {
  document.querySelector("#modal-nueva-venta").classList.remove("active");
};
document.querySelector(".btn-modal-close").onclick = cerrarModal;
// funcion que agrega la venta y cierra el modal
const agregarVenta = () => {
  alert("crear la venta!");
  cerrarModal();
};
document.querySelector(".btn-modal-agregar").onclick = agregarVenta;
  
 /* 1-  precioMaquina(componentes): recibe un array de componentes y devuelve el precio de la máquina que se puede armar con esos componentes, que es la suma de los precios de cada componente incluido. */
  console.log("precio maquina")
 function obtenerPrecioDelComponente (nombreComponente) {
   
    const componente = local.precios.find(function (p) {
      return p.componente === nombreComponente;
    })
    return componente.precio;
  }
  
  function precioMaquina (componentes) {
    let total = 0;
  

    componentes.forEach(c => total += obtenerPrecioDelComponente( c ));
  
    return total;
  }
  
  console.log( precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"]) )
/* 2  cantidadVentasComponente(componente): recibe un componente y devuelve la cantidad de veces que fue vendido, o sea que formó parte de una máquina que se vendió. La lista de ventas no se pasa por parámetro, se asume que está identificada por la variable ventas. */

const cantidadVentasComponente=(componenteUnitario)=> { 
return local.ventas
.map(venta=>venta.componentes)
.flat()
.filter(componenteVendido=>componenteVendido===componenteUnitario)
.length

};
console.log('cantidad Ventas Componente:')
console.log( cantidadVentasComponente("Monitor ASC 543") ) // 2

  

//3 vendedoraDelMes(mes, anio), se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la vendedora que más vendió en plata en el mes. O sea no cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica la función precioMaquina. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).

 console.log('vendedora del mes:')
function vendedoraDelMes(mes, anio) {
     
  let arrayVendedoras = [];
  local.vendedoras.forEach(function(vendedora){
    let vendedorasObj = {
      nombre: vendedora,
      ventas: 0       }

    vendedorasObj.ventas = local.ventas
      //filtro mes, año, vendedora
     .filter(function (elemento) {
       return elemento.fecha.getMonth() + 1 === mes
        && elemento.fecha.getFullYear() === anio
        && elemento.nombreVendedora === vendedora
      
     })
      //me quedo solo con el precio
      .map((venta)=>precioMaquina(venta.componentes))
      //sumo los precios de todas las ventas del mes de la vendedora
      .reduce(function(total, actual){
        //PASAR A FILTER
        //if (actual.fecha.getMonth() + 1 == mes && actual.fecha.getFullYear() == anio && vendedora === actual.nombreVendedora) {
          return total+=actual;
      /* }
      return total;
 */
     }, 0)

      arrayVendedoras.push(vendedorasObj)
    
  })  


      let mejorVendedora;
   

     
    mejorVendedora = arrayVendedoras.reduce(function(acc, curr){
      if(acc.ventas>curr.ventas){
        return acc
      }
      return curr;
    })
    return mejorVendedora.nombre;
 }
 console.log( vendedoraDelMes(1, 2019) )

console.log("vendedoraDelMes2:")
 const vendedoraDelMes2 = (mes, anio) => {
  let maxImporte = 0;
  let maxNombreVendedora = '';
  // recorrer listado de vendedoras
  local.vendedoras.forEach(function(vendedora){
   
    let totalVendido = 0;
    // ver cuanto vendió cada una
    // filtro las ventas por vendedora
   /*  const ventasFiltradas =  */
    local.ventas.filter(venta => {
      return venta.nombreVendedora === vendedora
        && venta.fecha.getFullYear() === anio
        && venta.fecha.getMonth() + 1 === mes
    })
    .forEach(function(venta){ 
    
      const importe = precioMaquina(venta.componentes);
      totalVendido += importe;
    })
    // totalVendido va tener todo lo que vendió X vendedora
    if (totalVendido > maxImporte) {
      maxImporte = totalVendido;
      maxNombreVendedora = vendedora;
    }
  } )// aca termina el for de las vendedoras

  return maxNombreVendedora;
}
console.log( vendedoraDelMes2(1, 2019) )

//4
/* ventasMes(mes, anio): Obtener las ventas de un mes. ventasMes(mes, anio): Obtener las ventas de un mes. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).*/


console.log("ventasMes:")
const ventasMes=(mes,anio)=>{
  let total=0;

local.ventas.forEach(venta=>{
  if (venta.fecha.getFullYear() === anio && venta.fecha.getMonth() + 1=== mes){ 
  total +=precioMaquina(venta.componentes);
 }
});
return total;
}
console.log( ventasMes(1, 2019) ); // 1250

//5
//ventasVendedora(nombre): Obtener las ventas totales realizadas por una vendedora sin límite de fecha.

console.log("FUNCIÓN VENTAS VENDEDORA")


function ventasVendedora(vendedora) {
    let totalVentas = 0
 
  local.ventas.filter(venta => 
vendedora===venta.nombreVendedora)
.forEach (venta=> totalVentas+=precioMaquina(venta.componentes));
return totalVentas

}
 

console.log( ventasVendedora("Grace") ); // 900
//6
// componenteMasVendido(): Devuelve el nombre del componente que más ventas tuvo historicamente. El dato de la cantidad de ventas es el que indica la función cantidadVentasComponente

console.log("componente más vendido")
function componenteMasVendido() {
  let dato = local.precios[1].componente

   local.precios.forEach(function (comp) 
     
    {
        if (cantidadVentasComponente(comp.componente) > cantidadVentasComponente(dato)) {
            dato = comp.componente
        }

        })
return dato

}
console.log( componenteMasVendido() ); // Monitor GPRS 3000


//7
//huboVentas(mes, anio): que indica si hubo ventas en un mes determinado.
function huboVentas (mes, anio) {
   return ventasMes(mes, anio) > 0;
     }

console.log(huboVentas(3, 2019)); // false
console.log(huboVentas(1, 2019)); // true
console.log(huboVentas(2, 2019)); // true

// Crear la función ventasSucursal(sucursal), que obtiene las ventas totales realizadas por una sucursal sin límite de fecha.
//2.1
console.log("2.1 venta Sucursal")


function ventasSucursal(sucursalParametro){
  let ventasTotales=0

local.ventas.filter(elemento=>sucursalParametro===elemento.sucursal)

 .forEach(total=>ventasTotales += precioMaquina(total.componentes));
return ventasTotales 
}

console.log(ventasSucursal("Centro")); // 4195

//2.2
/* Las funciones ventasSucursal y ventasVendedora tienen mucho código en común, ya que es la misma funcionalidad pero trabajando con una propiedad distinta. Entonces, ¿cómo harías para que ambas funciones reutilicen código y evitemos repetir? */


function ventasTotal(parametro){
  let total=0

local.ventas.filter(elemento=>parametro===elemento.sucursal || parametro===elemento.nombreVendedora)

 .forEach(resultado=>total += precioMaquina(resultado.componentes));
return total 
}

console.log(ventasTotal('Centro'))


//2.6
/* Crear la función sucursalDelMes(mes, anio), que se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la sucursal que más vendió en plata en el mes. No cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica la función precioMaquina. */


     //maxSucursal maxSucursalMonto
    //filtrar ventas por mes y año
    //iterar por cada sucursal
     //iterar por las ventas
       //sumamos las ventas de la sucursal
     //si maxSucursalMonto<las ventas de la sucursal  

     const sucursalDelMes = (mes, anio) => {
      let maxSucursal = '';
      let maxSucursalMonto = 0;
     
      local.sucursales.forEach(function(sucursal){
       
        let totalVendido = 0;
        
        local.ventas.filter(venta => {
          return venta.sucursal === sucursal
            && venta.fecha.getFullYear() === anio
            && venta.fecha.getMonth() + 1 === mes
        })
        .forEach(function(venta){ 
        
          const importe = precioMaquina(venta.componentes);
          totalVendido += importe;
        })
        
        if (totalVendido > maxSucursalMonto) {
          maxSucursalMonto = totalVendido;
          maxSucursal = sucursal;
        }
      } )
    
      return maxSucursal;
    }
   

console.log(sucursalDelMes(1, 2019)); // "Centro"


  

/* 
Para tener una mejor muestra de como está resultando el local, queremos desarrollar un reporte que nos muestre las ventas por sucursal y otros dos datos más.

El reporte se tiene que visualizar al final del sitio web como se ve en la web ejemplo
Debe contener una tabla donde se liste cada sucursal y el total de ventas que tuvo.
Debe mostrar:
Producto estrella: el componente que más ventas generó
Vendedora que más ingresos generó: la vendedora que mayor cantidad de ingresos generó (no cantidad de ventas)
 */
//3.1 total de ventas por sucursal

