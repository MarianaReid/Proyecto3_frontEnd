import React, { useEffect, useState } from "react";
import { Table, Button } from 'react-bootstrap';
import Swal from "sweetalert2";
import ItemPedidos from "./ItemPedidos"
import { useNavigate } from "react-router-dom";
import "./Pedidos.css";
import { formatMoneda } from "./HelperCarrito";
import { createCart } from "../../services/cartsService";

const Pedidos = () => {
    const navigate = useNavigate();

    const productosPedidoTemp = JSON.parse(localStorage.getItem("carrito")) || [];
    const usuario = JSON.parse(localStorage.getItem("userLogged"));
    const [listaProductosPedido, setListaProductosPedido] = useState(productosPedidoTemp);
    const [total, setTotal] = useState(0);
    const [botonActivo, setBotonActivo] = useState(true)
    const [modTotal, setModTotal] = useState(false);

    const actualizarTotal = (lista) => {
        let subTotal = 0;
        lista.map((item) => subTotal += item.price * item.cantidad);
        setTotal(subTotal);
        setListaProductosPedido(lista)
        if (subTotal === 0) {
            setBotonActivo(false)
        } else {
            setBotonActivo(true)
        }
    }
    useEffect(() => {
        actualizarTotal(listaProductosPedido);
        window.scrollTo(0, 0);
    }, [listaProductosPedido, modTotal]);



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
                // actualizarTotal(nuevaLista);
                setListaProductosPedido(nuevaLista);

                localStorage.setItem("carrito", JSON.stringify(nuevaLista));

                Swal.fire("Producto eliminado", "El producto fue quitado del pedido", "success");
            }
        });
    };

    const restarUno = (producto) => {
        let i = listaProductosPedido.findIndex((item) => {
            return item._id === producto._id;
        });
        if (i >= 0 && listaProductosPedido[i].cantidad > 1) {
            listaProductosPedido[i].cantidad--;
            // actualizarTotal(listaProductosPedido);
            setListaProductosPedido(listaProductosPedido);

            localStorage.setItem("carrito", JSON.stringify(listaProductosPedido));
        }
    }

    const sumarUno = (producto) => {
        let i = listaProductosPedido.findIndex((item) => {
            return item._id === producto._id;
        });
        if (i >= 0) {
            listaProductosPedido[i].cantidad++;
            // actualizarTotal(listaProductosPedido);
            localStorage.setItem("carrito", JSON.stringify(listaProductosPedido));
            setListaProductosPedido(listaProductosPedido);
        }
    }

    const guardarPedido = async () => {
        try {
            const pedidos = {
                users: usuario.id,
                productsCart: [...listaProductosPedido],
                total: total,
            };

                const { data } = await createCart(pedidos);
                Swal.fire(
                    'Creado!',
                    'Presiona ok para continuar',
                    'success'
                )
                
                if (data) {
                    localStorage.setItem("carrito", JSON.stringify([]));
                    setListaProductosPedido([]);
                    navigate("/");

                    Swal.fire("Perfecto!", "Su pedido esta siendo preparado!", "success");
                } else {
                    Swal.fire("Ups!", "Ha ocurrido un error, intente nuevamente", "error");
                }
            } catch (error) {
                console.log("ERROR ",error);
            }
        };

        const borrarCarrito = () => {
            Swal.fire({
                title: "Esta seguro?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Si, borrar",
                cancelButtonText: "Cancelar",
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.setItem("carrito", JSON.stringify([]));
                    setListaProductosPedido([]);
                    setTotal(0);
                    setBotonActivo(false)
                    Swal.fire("El carrito se vacio con exito", "Los productos fueron quitados del pedido", "success");
                }
            });
        }

        const handleClick = () => {
            // actualizarTotal(listaProductosPedido);

            Swal.fire({
                title: "Esta seguro?",
                text: `Total a pagar :$ ${total}`,
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Si, pagar!",
                cancelButtonText: "Cancelar",
            }).then((result) => {
                if (result.isConfirmed) {
                    guardarPedido();
                }
            });
        };

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
                                <ItemPedidos key={producto._id} producto={producto} quitarProducto={quitarProducto} restarUno={restarUno} sumarUno={sumarUno} modTotal={modTotal} setModTotal={setModTotal}></ItemPedidos>
                            ))}
                        </tbody>
                    </Table>
                    <p>Total: {formatMoneda(total)}</p>
                    <div className="text-end">
                        <Button variant="danger" className="mt-3 me-3 text-light" onClick={borrarCarrito} disabled={!botonActivo}>
                            Borrar carrito
                        </Button>
                        <Button variant="primary" className="mt-3" onClick={handleClick} disabled={!botonActivo}>
                            Proceder a pagar
                        </Button>
                    </div>
                </div>
            </div>
        );
    };

    export default Pedidos;