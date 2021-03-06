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
        return instance.get(`Messages/?currentUserId=${currentUserId}&friendId=${friendId}`);
    },
    postMessage(authorId, recipientId, message) {
        return instance.post(`Messages/CreateMessage`, {
            authorId: authorId,
            recipientId: recipientId,
            message: message
        });
    },
}
