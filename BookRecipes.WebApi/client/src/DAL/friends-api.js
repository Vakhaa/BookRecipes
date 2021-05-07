import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: "/api",
    /*headers: {
        "Authorization": "Bearer " + localStorage.getItem('accessToken')
    }*/
})

export const friendsAPI = {
    getFriends(currentUserId) {
        return instance.get(`Friends/${currentUserId}`, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('accessToken')
            }});
    },
}
