import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: "/api",
    /*headers: {
        "API-KEY" : "hash-kod"
    }*/
})

export const authAPI = {
    getAuth(login, password) {
        return instance.get(`Auth/?login=${login}&password=${password}`);
    },
}
