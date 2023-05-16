// Arreglo que guarda los productos agregados al carrito
let carrito = [];

// Función que agrega un producto al carrito
function agregarAlCarrito(precio) {
  carrito.push(precio);
  actualizarCarrito();
}
// Función que actualiza la lista de productos en el carrito y el total
function actualizarCarrito() {
  const carritoElemento = document.getElementById("carrito");
  let carritoHTML = "";
  let subtotal = 0;
  for (let i = 0; i < carrito.length; i++) {
    subtotal += carrito[i];
    carritoHTML += "<li>Producto " + (i+1) + ": $" + carrito[i].toFixed(2) + "</li>";
  }
  const iva = subtotal * 0.16;
  const totalConIVA = subtotal + iva;
  const totalSinIVA = subtotal;
  carritoHTML += "<li>Subtotal: $" + subtotal.toFixed(2) + "</li>";
  carritoHTML += "<li>IVA (16%): $" + iva.toFixed(2) + "</li>";
  carritoHTML += "<li>Total con IVA: $" + totalConIVA.toFixed(2) + "</li>";
  carritoElemento.innerHTML = carritoHTML;
}
