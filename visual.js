function crearVentaHTML (venta, ventaIndex) {
    const ventaHTML = `
    
        <tr>
        <td>${venta.fecha.getDate()}/${venta.fecha.getMonth() + 1}/${venta.fecha.getFullYear()}</td>
        <td>${ venta.sucursal }</td>
        <td>${ venta.nombreVendedora }</td>
        <td>${ venta.componentes }</td>
        <td>${ precioMaquina(venta.componentes) }</td>
        <td>
            <a onclick="remove(${ventaIndex})" href="#deleteEmployeeModal">x</i>
            </a>
        </td>
        </tr>
      
     
    `;
    return ventaHTML;
  }

  //Remove remueve del array y actualiza la tabla
  function remove (ventaIndex){
   local.ventas.splice(ventaIndex,1)
   actualizarTablaVentas()
   actualizarDatosSucursales()
   actualizarProductoEstrella()
   actualizarVendedora(); 
  }
  //crea la tabla de ventas
  function actualizarTablaVentas(){
  const ventasHTML = local.ventas.map(crearVentaHTML);
  
  const ul = document.getElementById('ventas');
  
  ul.innerHTML = ventasHTML.join('');
  }
  actualizarTablaVentas()
  // funcion que hace visible el modal
  
  //elimina toda la tabla de sucursales y la vuelve a crear
  function actualizarDatosSucursales() {
    document.querySelector('#sucursales').innerHTML=""  //vacío
    //agrego sucursales
    local.sucursales.forEach(function (s){
      document.querySelector('#sucursales').innerHTML+=`
     <tr>
      <td>${s}</td>
      <td>${ventasSucursal(s)}</td>
     </tr>`
    
    })  
 
};


const actualizarProductoEstrella= ()=>document.getElementById("productoEstrella")
.innerHTML = componenteMasVendido()
actualizarProductoEstrella()
  
    
const actualizarVendedora=()=>document.getElementById("mejorVendedora")
.innerHTML =mejorVendedora()
actualizarVendedora()


  
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
  const sucursal=document.querySelector('#sucursal').value
  const componentes=document.querySelector('#componentes').value
  const vendedora=document.querySelector('#vendedora').value
  //1 buscar el id correspondiente. mirar el ultimo de local.ventas[local.ventas.length -1]
  const id = local.ventas[local.ventas.length -1].id + 1
  const fecha=new Date()
  const nuevaVenta={
    sucursal:sucursal,
    componentes:[componentes],
    id:id,
    nombreVendedora:vendedora,
    fecha:fecha
  }
  console.log(nuevaVenta)
  local.ventas.push(nuevaVenta)

  actualizarTablaVentas()
  actualizarDatosSucursales()
  actualizarProductoEstrella()
  actualizarVendedora(); 
  cerrarModal();
};
document.querySelector(".btn-modal-agregar").onclick = agregarVenta;
//Formulario select de componentes dinámico


const selectComponentes = ( )=>{
  const select=document.querySelector('#componentes');
  local.precios.forEach(p=>{
    select.innerHTML+=`<option value="${p.componente}">${p.componente}</option>`
  })
}
selectComponentes()
//Formulario select de vendedora dinámico
const selectVendedora = ( )=>{
  const seleccionarVendedora=document.querySelector('#vendedora');
  local.vendedoras.forEach(vendedora=>{
    seleccionarVendedora.innerHTML+=`</option><option value="${vendedora}">${vendedora}</option>`
  })
}
selectVendedora()
//Formulario select dinámico de sucursal

const selectSucursal = ( )=>{
  const seleccionarSucursal=document.querySelector('#sucursal');
  local.sucursales.forEach(sucursal=>{
    seleccionarSucursal.innerHTML+=`<option value="${sucursal}">${sucursal}</option>`
  })
}
selectSucursal()


actualizarDatosSucursales()
 