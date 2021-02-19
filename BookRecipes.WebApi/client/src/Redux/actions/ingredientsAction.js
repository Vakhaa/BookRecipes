import {
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_ERROR
}
    from './actionTypes'

import { ingredientsAPI } from '../../DAL/api'

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

export const getIngredients =() =>{
    return (dispatch) => {
        dispatch(requestIngredients());

        ingredientsAPI.getIngredients().then(data => {
            dispatch(receiveIngredients(data))
        }).catch(error => {
            dispatch(errorIngredients(error))
        })
    }
}