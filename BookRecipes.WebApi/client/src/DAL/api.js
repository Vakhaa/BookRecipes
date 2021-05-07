import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: "/api",
    /*headers: {
        "Authorization": "Bearer " + localStorage.getItem('accessToken')
    }*/
})

export const ingredientsAPI = {
    getIngredients() {
        return instance.get(`Ingredients/Ingredients`, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('accessToken')
            }});
    },
    getIngredient(id) {
        return instance.get(`Ingredients/Ingredient/${id}`, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('accessToken')
            }
        });
    },
}
