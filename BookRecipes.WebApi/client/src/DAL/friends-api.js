import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: "/api",
    /*headers: {
        "API-KEY" : "hash-kod"
    }*/
})

export const friendsAPI = {
    getFriends(currentUserId) {
        return instance.get(`Friends/${currentUserId}`);
    },
}
