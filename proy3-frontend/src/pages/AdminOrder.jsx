import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Button, Form, InputGroup, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import { getAllCarts } from '../services/cartsService';

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
                <Table responsive striped bordered hover variant="dark" className='m-auto my-4'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>E-mail</th>
                            <th>Total</th>
                            <th>Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ordersSearch.map((order, index) => (
                            <tr key={order._id} >
                                <td>{++index}</td>
                                <td>{order.users.email}</td>
                                <td>${order.total}</td>
                                <td>
                                    <Link to={`/cart/${order._id}`}>
                                        <Button variant={order.isActive ? 'outline-success' : 'outline-warning'} size="sm">
                                            <span>info</span>
                                        </Button>
                                    </Link>
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
