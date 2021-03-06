import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: "/api",
    /*headers: {
        "API-KEY" : "hash-kod"
    }*/
})

export const profilesAPI = {
    getProfile(id) {
        return instance.get(`Profile/${id}`);
    },
}
