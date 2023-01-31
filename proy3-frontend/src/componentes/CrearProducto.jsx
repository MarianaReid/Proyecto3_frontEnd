import FormularioProducto from "../paginas/FormularioProducto";

const  CrearProducto = ({ token }) => {
    return (
        <div className="container mx-5">
            <h1>Alta de Productos</h1>
            <FormularioProducto token={token} />

        </div>
    );
}

export default CrearProducto