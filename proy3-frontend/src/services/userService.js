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