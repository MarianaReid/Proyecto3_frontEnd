import Swal from "sweetalert2";

export const AgregarCarrito = (producto) => {
    // const usuarioLogueado = "https://proyecto3-rolling-code.vercel.app/api/login"  null;


    if (usuarioLogueado != null) {
        // let productosPedido = JSON.parse(localStorage.getItem("https://proyecto3-rolling-code-los-crack.vercel.app/api/products%22))  [];


        let i = productosPedido.findIndex((item)=>{return item._id === producto._id});
        

        if (i>=0) {
          if (productosPedido[i].cantidad !== undefined)
            productosPedido[i].cantidad++;
          else
            productosPedido[i].cantidad=1;
        }
        else
        {
          producto.cantidad = 1;
          productosPedido.push(producto);
        }

        // localStorage.setItem("https://proyecto3-rolling-code-los-crack.vercel.app/api/products", JSON.stringify(productosPedido));
        Swal.fire(
          'Producto agregado',
          'El producto fue agregado correctamente',
          'success'
        );

        return true;
    }
    return false;
}

export const formatMoneda=(price)=>{
    return `$${price}`;
}
