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
        return instance.get(`Ingredients/Ingredients`);
    },
}
