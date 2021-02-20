import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: "/api",
    /*headers: {
        "API-KEY" : "hash-kod"
    }*/
})

export const ingredientsAPI = {
    getIngredients() {
        return instance.get(`Ingredients/Ingredients`).then(response => {
            return response.data
        });
    },
}

export const profilesAPI = {
    getProfile(id) {
        return instance.get(`Profile/${id}`).then(response => {
            return response.data
        });
    },
}

const profileMock = {
    id: 1,
    name: "Subzero",
    photo: "https://source.unsplash.com/random",
    status: "So so",
    description: "To jest najliepsze co zrobily ludzi. Aromatny zapazch, a jaki kolor, smack wymbitny.",
    socailNetworkings: [
        {
            id: 1,
            name: "Git Hub"
        },
        {
            id: 2,
            name: "Facebook"
        },
        {
            id: 3,
            name: "Telegram"
        },
    ],
    posts: [
        {
            id: 0,
            title: "Tonight I'm cooked some fine cake!",
            main: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
            photo: "https://source.unsplash.com/random"
        },
        {
            id: 1,
            title: "Some photo for you! Duddde",
            main: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
            photo: "https://source.unsplash.com/random"
        }
    ],
    newPostTitle: "",
    newPostBody: ""
}