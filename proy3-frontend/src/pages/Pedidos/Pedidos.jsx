import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import ItemPedidos from "./ItemPedidos"
import { useNavigate } from "react-router-dom";
import "./Pedidos.css";
import { formatMoneda } from "./HelperCarrito";

const Pedidos = () => {
    const navigate = useNavigate();
    // const URL =  "https://proyecto3-rolling-code-los-crack.vercel.app/api";

    useEffect(() => {
        actualizarTotal(listaProductosPedido);
        window.scrollTo(0, 0);
    }, []);

    // const productosPedidoTemp = JSON.parse(localStorage.getItem("https://proyecto3-rolling-code-los-crack.vercel.app/api/products%22))  [];

    // const usuario = JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE))  { nombre: "anonimo!!" };
    // const [listaProductosPedido, setListaProductosPedido] = useState(productosPedidoTemp);
    // const [total, setTotal] = useState(0);
    // const [botonActivo, setBotonActivo]=useState(true)

    const actualizarTotal=(lista)=>{
        let subTotal = 0;
        lista.map((item)=>subTotal += item.precio * item.cantidad);
        setTotal(subTotal);
        if(subTotal === 0){
            setBotonActivo(false)
        }else{
            setBotonActivo(true)
        }
    }

    const quitarProducto = (producto) => {
        Swal.fire({
            title: "Esta seguro?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminar",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                let nuevaLista = listaProductosPedido.filter((item) => {
                    return item._id !== producto._id;
                });
                actualizarTotal(nuevaLista);
                setListaProductosPedido(nuevaLista);

                // localStorage.setItem("https://proyecto3-rolling-code-los-crack.vercel.app/api/products", JSON.stringify(nuevaLista));

                Swal.fire("Producto eliminado", "El producto fue quitado del pedido", "success");
            }
        });
    };

    const restarUno = (producto) => {
        let i = listaProductosPedido.findIndex((item) => {
            return item._id === producto._id;
        });
        if (i>=0 && listaProductosPedido[i].cantidad>1) 
        {
            listaProductosPedido[i].cantidad--;
            actualizarTotal(listaProductosPedido);

            // localStorage.setItem("https://proyecto3-rolling-code-los-crack.vercel.app/api/products", JSON.stringify(listaProductosPedido));
        }
    }

    const sumarUno = (producto) => {
        let i = listaProductosPedido.findIndex((item) => {
            return item._id === producto._id;
        });
        if (i>=0) 
        {
            listaProductosPedido[i].cantidad++;
            actualizarTotal(listaProductosPedido);
            // localStorage.setItem("https://proyecto3-rolling-code-los-crack.vercel.app/api/products", JSON.stringify(listaProductosPedido));
        }
    }

    return (
        <div className="text-center text-dark carrito">
            <h1 className="text-light bg-dark container rounded-top mb-0 p-3">CARRITO DE COMPRAS</h1>
            <div className="tabla container py-3 mb-5">
                <Table striped responsive>
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th>Sub-total</th>
                            <th>Accion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaProductosPedido.map((producto) => (
                            <ItemPedidos key={producto._id} producto={producto} quitarProducto={quitarProducto} restarUno={restarUno} sumarUno={sumarUno}></ItemPedidos>
                        ))}
                    </tbody>
                </Table>
                <p>Total: {formatMoneda(total)}</p>
                {/* <p>Total: ...?</p> */}
                <div className="text-end">
                    <Button variant="danger" className="mt-3 me-3 text-light" onClick={borrarCarrito}>Borrar carrito</Button>
                    {/* <Button variant="danger" className="mt-3 me-3 text-light">Borrar carrito</Button> */}
                    <Button variant="primary" className="mt-3" onClick={handleClick} disabled={!botonActivo}>
                        Proceder a pagar
                    </Button>
                    {/* <Button variant="primary" className="mt-3">
                        Proceder a pagar
                    </Button> */}
                </div>
            </div>
        </div>
    );
};

export default Pedidos;