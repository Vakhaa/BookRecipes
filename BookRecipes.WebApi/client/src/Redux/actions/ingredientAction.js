import {
    GET_INGREDIENT_REQUEST,
    GET_INGREDIENT_SUCCESS,
    GET_INGREDIENT_ERROR
}
    from './actionTypes'

export function requestIngredient(id) {
    return {
        type: GET_INGREDIENT_REQUEST,
        ingredient: id
    }
}

export function receiveIngredient(item) {
    return {
        type: GET_INGREDIENT_SUCCESS,
        ingredient: item
    }
}

export function errorIngredient(error) {
    return {
        type: GET_INGREDIENT_ERROR,
        error: error
    }
}

//генератор экшена

export function getIngredient(id) {
    return (dispatch) => {
        dispatch(requestIngredient(id))

        fetch(`api/Ingredients/Ingredient/${id}`)
            .then((response) => {
                return response.json()
            }).then(json => {
                dispatch(receiveIngredient(json))
            }).catch((e) => {
                dispatch(errorIngredient(e))
            });
    }
}