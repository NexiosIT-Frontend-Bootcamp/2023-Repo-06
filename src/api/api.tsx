import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const baseurl = 'https://lobster-app-osqfh.ondigitalocean.app';

interface IApiLoginResponse {
    data: string;
    statuscode: number;
}


const api = {
    login: async (email: string, password: string) => {
        return await axios.post(`${baseurl}/auth/login`, {
            email: email,
            password: password
        });
    },

    register: async (username: string, email: string, password: string) => {
        const response = await fetch(`${baseurl}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username: username, email: email, password: password }),
        });
        const data = await response.json();
        console.log(data);

        return data;
    },

    getUsers: async () => {
        const response = await fetch(`${baseurl}/users`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('token') as string
            },
        });
        console.log(localStorage.getItem('token'));
        const data = await response.json();
        console.log(data);

        return data;
    },

    logout: async () => {
        localStorage.removeItem('token');
        window.location.href = '/';
    },

    getUser: async (token: string) => {
        const response = await fetch(`${baseurl}/users/profile`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('token') as string
            },
        });
        const data = await response.json();
        console.log(data);

        return data;
    }
};

export default api;