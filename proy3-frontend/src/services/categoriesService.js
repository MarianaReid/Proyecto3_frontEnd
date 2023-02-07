import clientAxios from '../config/clientAxios';

export const getAllCategories = async () => {
    try {
        return await clientAxios.get('/categories?limit=60')
    } catch (error) {
        console.error(error);
    }
}

export const getOneCategory = async (id) => {
    try {
        return await clientAxios.get(`/category/${id}`)
    } catch (error) {
        console.error(error);
    }
}

export const createCategory = async (data) => {
    try {
        return await clientAxios.post('/category', data)
    } catch (error) {
        console.error(error);
    }
}

export const deleteCategory = async (id) => {
    try {
        return await clientAxios.delete(`/category/${id}`)
    } catch (error) {
        console.error(error);
    }
}

export const updateProduct = async (id, newProduct) => {
    try {
        return await clientAxios.put(`/category/${id}`, newProduct)
    } catch (error) {
        console.error(error);
    }
}