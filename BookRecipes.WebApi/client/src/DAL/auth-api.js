import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: "/api",
    /*headers: {
        "Authorization": "Bearer " + localStorage.getItem('accessToken')
    }*/
})

export const authAPI = {
    auth(login, password) {
        return instance.post(`Auth`, {
            mail: login,
            password: password
        }, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('accessToken')
            }
        });
    },
    logout() {
        return instance.delete(`Auth/Logout`);
    },
    register(login, password) { //coming soon
        return instance.post(`Auth/Register`, {
            mail: login,
            password: password
        });
    },
    refresh() {
        return instance.put(`Auth/Refresh`, {},{
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('accessToken'),
                "refreshToken": localStorage.getItem('refreshToken'),
        }
        });
    }
}
