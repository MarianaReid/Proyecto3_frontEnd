import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import ItemPedidos from "./ItemPedidos"
import { useNavigate } from "react-router-dom";
import "./Pedidos.css";
import { formatMoneda } from "./HelperCarrito";

const Pedidos = () => {
   
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