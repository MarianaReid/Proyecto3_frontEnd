import clientAxios from '../config/clientAxios';

// export const getAllProducts = async () => {
//     try {
//         return await clientAxios.get('/products?limit=60')
//     } catch (error) {
//         console.error(error);
//     }
// }

// export const getOneProduct = async (id) => {
//     try {
//         return await clientAxios.get(`/product/${id}`)
//     } catch (error) {
//         console.error(error);
//     }
// }

export const createCart = async (data) => {
    try {
        return await clientAxios.post('/cart', data)
    } catch (error) {
        console.error(error);
    }
}

// export const deleteProduct = async (id) => {
//     try {
//         return await clientAxios.delete(`/product/${id}`)
//     } catch (error) {
//         console.error(error);
//     }
// }

// export const updateProduct = async (id, newProduct) => {
//     try {
//         return await clientAxios.put(`/product/${id}`, newProduct)
//     } catch (error) {
//         console.error(error);
//     }
// }