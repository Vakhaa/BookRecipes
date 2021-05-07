import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: "/api",
    /*headers: {
        "Authorization": "Bearer " + localStorage.getItem('accessToken')
    }*/
})

export const profilesAPI = {
    getProfile(id) {
        return instance.get(`Profile/${id}`, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('accessToken')
            }});
    },
}
