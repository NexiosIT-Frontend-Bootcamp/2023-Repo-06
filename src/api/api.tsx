import axios from "axios";

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

    // const response = await fetch(`${baseurl}/auth/login`, {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ email:email, password:password }),
    // });

    // const data = await response.json();
    // console.log(response.status);
    // return data;
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
};

export default api;