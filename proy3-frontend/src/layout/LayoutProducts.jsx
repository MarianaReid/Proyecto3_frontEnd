import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { getLocalStorage } from '../utils/LocalStorageHelper';

const LayoutProducts = () => {
    const UserLogged = getLocalStorage("token");

    if (!UserLogged) {
        return <Navigate to="/login" />
    }

    return (
        <>
            <Outlet/>
        </>
    )
}

export default LayoutProducts