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
  }
  //crea la tabla de ventas
  function actualizarTablaVentas(){
  const ventasHTML = local.ventas.map(crearVentaHTML);
  
  const ul = document.getElementById('ventas');
  
  ul.innerHTML = ventasHTML.join('');
  }
  actualizarTablaVentas()
  // funcion que hace visible el modal
  
  function actualizarDatos() {
    
  }
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

const selectComponentes = ( )=>{
  const select=document.querySelector('#componentes');
  local.precios.forEach(p=>{
    select.innerHTML+=`<option value="${p.componente}">${p.componente}</option>`
  })
}
selectComponentes()

const selectVendedora = ( )=>{
  const seleccionarVendedora=document.querySelector('#vendedora');
  local.vendedoras.forEach(vendedora=>{
    seleccionarVendedora.innerHTML+=`</option><option value="${vendedora}">${vendedora}</option>`
  })
}
selectVendedora()
//hago lo mismo con sucursal

const selectSucursal = ( )=>{
  const seleccionarSucursal=document.querySelector('#sucursal');
  local.sucursales.forEach(sucursal=>{
    seleccionarSucursal.innerHTML+=`<option value="${sucursal}">${sucursal}</option>`
  })
}
selectSucursal()
 