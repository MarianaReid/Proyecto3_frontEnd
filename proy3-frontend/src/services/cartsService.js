import clientAxios from '../config/clientAxios';

export const getAllCarts = async () => {
    try {
        return await clientAxios.get('/carts')
    } catch (error) {
        console.error(error);
    }
}

export const getOneCart = async (id) => {
    try {
        return await clientAxios.get(`/cart/${id}`)
    } catch (error) {
        console.error(error);
    }
}

export const createCart = async (data) => {
    try {
        return await clientAxios.post('/cart', data)
    } catch (error) {
        console.error(error);
    }
}

export const deleteCart = async (id) => {
    try {
        return await clientAxios.delete(`/cart/${id}`)
    } catch (error) {
        console.error(error);
    }
}

export const updateCart = async (id, newCart) => {
    try {
        return await clientAxios.put(`/cart/${id}`, newCart)
    } catch (error) {
        console.error(error);
    }
}