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
for (let i = 0; i < params.length; i++) {

    for (let z=0; z<local.precios.length; z++){
if (params[i]===local.precios[z].componente) {
 console.log(params[i])
console.log(local.precios[z].precio) 
    console.log ((local.precios[z].precio) + (local.precios[z].precio))
}
    }
    
}
}

    

precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"]) 











/* 

  precioMaquina(componentes): recibe un array de componentes y devuelve el precio de la máquina que se puede armar con esos componentes, que es la suma de los precios de cada componente incluido.
  
  console.log( precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"]) ); // 320 ($200 del monitor + $120 del */
/* function precioMaquina (componentes){
    for (let i = 0; i < componentes.length; i++) {
        //const element = array[index];
        console.log (componentes[i])
        for (let j = 0; j < local.precios.length; j++) {
           console.log(local.precios[j]) 

        }
    }
} */
//Map ver en cuaderno. Aprender de memoria item, i, array y sintaxis)
/* function precioMaquina(componentes) {
    

componentes.map (function(item,i,array) {
    console.log (item)
    local.precios.map(function(itemDos, iDos, arrayDos){
        console.log(itemDos.componente)

    })
    
})
}  */
/* let diaDeHoy= new Date ();
console.log (diaDeHoy) */

/* function vendedoradelMes(mes, anio){
    for (let i = 0; index < local.ventas.length; index++) {
       // local.ventas[i].fecha;
        
    }
}
for (let i = 0; i < ventasFiltradas.length; index++) {
   if (ventasFiltradas[i].nombreVendedora==='Ada'){
        //guardamos ventas de Ada
    }
    else if(ventasFiltradas[i].nombrevendedora==='Grace'){

    }
} */