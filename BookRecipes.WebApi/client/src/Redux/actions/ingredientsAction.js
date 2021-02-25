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

export const getIngredients = async () =>{
    return (dispatch) => {
        dispatch(requestIngredients());

        let response = await ingredientsAPI.getIngredients();

        try {
            dispatch(receiveIngredients(response.data))
        } catch (error) {
            dispatch(errorIngredients(error))
        }
    }
}