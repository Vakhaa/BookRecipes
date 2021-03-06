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
    postPost(profileId, title, body, authorId) {
        return instance.post(`Posts/CreatePost`, {
            profileId: profileId,
            title: title,
            body: body,
            authorId: authorId
        });
    }
}
