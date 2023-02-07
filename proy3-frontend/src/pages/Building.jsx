import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Building = () => {
    return (
        <div className='m-auto text-center'>
            <h1 className='my-5'>PROXIMAMENTE...</h1>
            <Link to="/products">
                <Button className='btn-block my-5'>Volver a home</Button>
            </Link>
        </div>
    )
}

export default Building