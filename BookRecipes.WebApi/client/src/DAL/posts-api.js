import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: "/api",
    /*headers: {
        "Authorization": "Bearer " + localStorage.getItem('accessToken')
    }*/
})

export const postsAPI = {
    getPosts(currentUserId) {
        return instance.get(`Posts/${currentUserId}`, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('accessToken')
            }});
    },
    postPost(profileId, title, body, authorId, conectionId) {
        return instance.post(`Posts/CreatePost/${conectionId}`, {
            profileId: profileId,
            title: title,
            body: body,
            authorId: authorId
        }, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('accessToken')
            }});
    }
}
