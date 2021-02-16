import {
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_ERROR
}
    from './actionTypes'

import * as axios from 'axios'

export function requestIngredients() {
    return {
        type: GET_INGREDIENTS_REQUEST
    }
}

export function receiveIngredients(items) {
    return {
        type: GET_INGREDIENTS_SUCCESS,
        ingredients: items
    }
}

export function errorIngredients(error) {
    return {
        type: GET_INGREDIENTS_ERROR,
        error: error
    }
}

//генератор экшена
export function getIngredients() {
    return (dispatch) => {
        dispatch(requestIngredients())

        axios.get("api/Ingredients/Ingredients").then(response => {
            dispatch(receiveIngredients(response.data))
        }).catch(error => {
            dispatch(errorIngredients(error))
        })
        /*fetch(`api/Ingredients/Ingredients`)
            .then((response) => {
                return response.json()
            }).then(json => {
                dispatch(receiveIngredients(json))
            }).catch((e) => {
                dispatch(errorIngredients(e))
            });*/
    }
}
