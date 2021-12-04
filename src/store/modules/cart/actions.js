import { ADD_PRODUCT, REMOVE_PRODUCT } from './actionTypes'

export const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        product
    }
}

export const removeProduct = (newList) => {
    console.log(newList)
    return { 
        type: REMOVE_PRODUCT, 
        newList 
    }
}