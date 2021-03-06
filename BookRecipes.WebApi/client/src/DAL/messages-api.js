import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: "/api",
    /*headers: {
        "API-KEY" : "hash-kod"
    }*/
})

export const messagesAPI = {
    getMessages(currentUserId, friendId) {
        debugger
        return instance.get(`Messages/?currentUserId=${currentUserId}&friendId=${friendId}`);
    },
}
