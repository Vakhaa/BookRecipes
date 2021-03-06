import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: "/api",
    /*headers: {
        "API-KEY" : "hash-kod"
    }*/
})

export const postsAPI = {
    getPosts(currentUserId) {
        return instance.get(`Posts/${currentUserId}`);
    },
}
