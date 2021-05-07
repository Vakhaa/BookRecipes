import {
    GET_INGREDIENT_REQUEST,
    GET_INGREDIENT_SUCCESS,
    GET_INGREDIENT_ERROR
}
    from './actionTypes'
import { getRefreshToken } from './loginAction'
import { ingredientsAPI } from '../../DAL/api.js'

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
    return async (dispatch) => {
        dispatch(requestIngredient(id))

        try {
            let response = await ingredientsAPI.getIngredient(id);

            dispatch(receiveIngredient(response.data));
        } catch (error) {

            if (error.response.status === 401) {
                dispatch(getRefreshToken());
            }

            dispatch(errorIngredient(error))
        }
    }
}