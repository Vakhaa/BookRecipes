import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: "/api",
    /*headers: {
        "Authorization": "Bearer " + localStorage.getItem('accessToken')
    }*/
})

export const messagesAPI = {
    getMessages(currentUserId, friendId) {
        return instance.get(`Messages/?currentUserId=${currentUserId}&friendId=${friendId}`, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('accessToken')
            }});
    },
    postMessage(authorId, recipientId, message, conectionId) {
        return instance.post(`Messages/CreateMessage/${conectionId}`, {
            authorId: authorId,
            recipientId: recipientId,
            message: message
        }, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('accessToken')
            }});
    },
}
