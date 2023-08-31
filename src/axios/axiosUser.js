import axios from 'axios'
import { BASE_URL } from "../utils/constants";

export const createUser = async(name, lastname, email, password, headerKey)=>{
    try {
        await axios.post(`${BASE_URL}/auth/register`, {
            name,
            lastname,
            email,
            password
        },
        {
            headers: {
                'admin-key': headerKey
            }
        });
        const user = await loginUser(email, password);
        return user
    } catch (error) {
        return (error.response.data.errors.errors[0].msg)
    }
}

export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(`${BASE_URL}/auth/login`, {
            email,
            password
        })
        return response.data;
    } catch (error) {
        return (error.response.data.message)
    }
}

export const verifyUser = async (email, code) => {
    try {
        const response = await axios.patch(`${BASE_URL}/auth/verify`, {
            email,
            code
        });
        return response.data
    } catch (error) {
        console.log(error);
        return (error.response.data.message)        
    }
}