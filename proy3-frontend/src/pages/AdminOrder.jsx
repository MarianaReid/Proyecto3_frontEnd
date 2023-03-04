import { useEffect, useState } from 'react';
import { Button, Form, InputGroup, Table } from 'react-bootstrap';
import Swal from 'sweetalert2';
import Loader from '../components/Loader';
import { getAllCarts, updateCart } from '../services/cartsService';

const AdminOrder = () => {
    const [orders, setOrders] = useState([]);
    const [ordersSearch, setOrdersSearch] = useState([]);
    const [term, setTerm] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const fetchOrders = async () => {
            const { data } = await getAllCarts();
            // console.log("DATAA:",data.docs);
            setOrders(data);
            setOrdersSearch(data);
        };
        fetchOrders();
        setLoading(false);
    }, []);

    useEffect(() => {
        const search = orders.filter(or => or.users.name?.toLowerCase().includes(term.toLowerCase()));
        setOrdersSearch(search)
    }, [term, orders])

    const editCart = async (_id, isActive) => {
        setLoading(true);
        await updateCart(_id, isActive);
        setLoading(false);
        Swal.fire(
            'Pedido entregado!',
            'Presiona ok para continuar',
            'success'
        )
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-1">Panel Administrador</h1>
            <h2 className="text-center mb-4 fw-bolder">PEDIDOS</h2>

            <Loader isLoading={loading}>
                <InputGroup className="mb-3 my-3">
                    <InputGroup.Text id="basic-addon1">Buscar</InputGroup.Text>
                    <Form.Control
                        placeholder="Pedidos"
                        aria-label="Pedidos"
                        aria-describedby="basic-addon1"
                        onChange={(e) => setTerm(e.target.value)}
                    />
                </InputGroup>
                <Table striped bordered hover variant="dark" className='m-auto my-4'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Total</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ordersSearch.map((order, index) => (
                            <tr key={order._id} >
                                <td>{++index}</td>
                                <td>{order.users.name}</td>
                                <td>$ {order.total}</td>
                                <td>
                                    <Button
                                        type="button"
                                        size="sm"
                                        className="m-1"
                                        {...!order.isActive ? { variant: "warning" } : { variant: "success" }}
                                        {...!order.isActive ? { disabled: false } : { disabled: true }}
                                        onClick={() => {
                                            editCart(order._id, {isActive: !order.isActive})
                                        }}
                                    >
                                        {order.isActive ? "E" : "P"}
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Loader>

        </div>
    );
};

export default AdminOrder;
