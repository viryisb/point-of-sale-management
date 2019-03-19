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
  
function precioMaquina(params) {
    let precioTotal=0;

for (let i = 0; i < params.length; i++) {

    for (let z=0; z<local.precios.length; z++){
if (params[i]===local.precios[z].componente) {
    precioTotal+=local.precios[z].precio

}
    }
    
}
return precioTotal
}

    console.log (precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"]) )



function cantidadVentasComponente(componente){
    var cantidadVentas=0
    for (let i = 0; i < local.ventas.length; i++) {
        console.log (local.ventas[i].componentes) 
        for (let j = 0; j< local.ventas[i].componentes.length; j++) {
            //console.log( local.ventas[i].componentes[j])
            if (componente === local.ventas[i].componentes[j]) {

                cantidadVentas++
            }
            
        }
        
    }return cantidadVentas
}
console.log(cantidadVentasComponente("Monitor ASC 543")); // 2


function vendedoraDelMes(mes, anio){
    var ventasAda = 0
    var ventasGrace=0
    for(var i=0; i<local.ventas.length; i++){
        if(local.ventas[i].fecha.getMonth()+1==mes&&local.ventas[i].fecha.getFullYear()==anio){
            if(local.ventas[i].nombreVendedora==='Ada'){
            ventasAda += precioMaquina(local.ventas[i].componentes)
        }
        else if ((local.ventas[i].nombreVendedora==='Grace')){
            ventasGrace += precioMaquina(local.ventas[i].componentes)}
           
    }
    
if (ventasGrace>ventasAda){
 return'Grace'
 } else {
 return'Ada'
   
 
}
}
}
console.log( vendedoraDelMes(1, 2019) ) 

/* ventasMes(mes, anio): Obtener las ventas de un mes. */

  function ventasMes(mes, anio) {
    var ventasDeUnMes = 0;
    for (var i = 0; i < local.ventas.length; i++) {
        if ((mes == (local.ventas[i].fecha.getMonth() + 1)) && (anio == local.ventas[i].fecha.getFullYear())) {
            ventasDeUnMes += precioMaquina(local.ventas[i].componentes);
        }
    }
    return ventasDeUnMes
}

console.log( ventasMes(1, 2019) )