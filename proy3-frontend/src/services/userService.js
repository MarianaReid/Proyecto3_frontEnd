import clientAxios from '../config/clientAxios';

export const userRegister = async (data) => {
    try {
        return await clientAxios.post('/createUser', data)
    } catch (error) {
        console.error(error);
    }
}

export const userLogin = async (data) => {
    try {
        return await clientAxios.post('/login', data)
    } catch (error) {
        console.error(error);
    }
}

export const getAllUsers = async () => {
    try {
        return await clientAxios.get('/users?limit=100')
    } catch (error) {
        console.error(error);
    }
}

export const getOneUsers = async (id) => {
    try {
        return await clientAxios.get(`/user/${id}`)
    } catch (error) {
        console.error(error);
    }
}

export const deleteUser = async (id) => {
    try {
        return await clientAxios.delete(`/users/${id}`)
    } catch (error) {
        console.error(error);
    }
}

export const createUsers = async (data) => {
    try {
        return await clientAxios.post('/createUser', data)
    } catch (error) {
        console.error(error);
    }
}

export const updateUser = async (id, newUser) => {
    try {
        return await clientAxios.put(`/users/${id}`, newUser)
    } catch (error) {
        console.error(error);
    }
}