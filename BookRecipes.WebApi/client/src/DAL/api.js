import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    /*baseURL: "http://sadas.czlen.com",
    headers: {
        "API-KEY" : "hash-kod"
    }*/
})

export const ingredientsAPI = {
    getIngredients() {
        return instance.get(`api/Ingredients/Ingredients`).then(response => {
            return response.data
        });
    },
}

/*fetch(`api/Ingredients/Ingredients`)
    .then((response) => {
        return response.json()
    }).then(json => {
        dispatch(receiveIngredients(json))
    }).catch((e) => {
        dispatch(errorIngredients(e))
    });*/
