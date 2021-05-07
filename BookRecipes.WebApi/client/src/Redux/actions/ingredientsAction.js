import {
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_ERROR
}
    from './actionTypes'

import { ingredientsAPI } from '../../DAL/api'
import { getRefreshToken } from './loginAction'

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

export const getIngredients = () =>{
    return async (dispatch) => {
        dispatch(requestIngredients());

        try {
            let response = await ingredientsAPI.getIngredients();   

            dispatch(receiveIngredients(response.data))

        } catch (error) {

            if (error.response.status === 401) {
                dispatch(getRefreshToken());
            }

            dispatch(errorIngredients(error))
        }
    }
}