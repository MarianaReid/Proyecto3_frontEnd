import Swal from "sweetalert2";

export const AgregarCarrito = (producto) => {
  const usuarioLogueado = "https://proyecto3-rolling-code.vercel.app/api/login" || null;


  if (usuarioLogueado != null) {
    let productosPedido = JSON.parse(localStorage.getItem("carrito")) || [];


    let i = productosPedido.findIndex((item) => { return item._id === producto._id });


    if (i >= 0) {
      if (productosPedido[i].cantidad !== undefined)
        productosPedido[i].cantidad++;
      else
        productosPedido[i].cantidad = 1;
    }
    else {
      producto.cantidad = 1;
      productosPedido.push(producto);
    }

    localStorage.setItem("carrito", JSON.stringify(productosPedido));
    Swal.fire(
      'Producto agregado',
      'El producto fue agregado correctamente',
      'success'
    );

    return true;
  }
  return false;
}

export const formatMoneda = (price) => {
  return `$${price}`;
}
