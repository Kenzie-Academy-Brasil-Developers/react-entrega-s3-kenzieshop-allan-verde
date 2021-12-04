import { addProduct, removeProduct } from './actions'

export const addProductThunk = (product) => {
    return (dispatch) => {

        const cart = JSON.parse(localStorage.getItem('@cart')) || []

        cart.push(product)

        localStorage.setItem('@cart', JSON.stringify(cart))

        dispatch(addProduct(product))

    }
}


export const removeProductThunk = (product) => {
    return (dispatch) => {
        const cart = JSON.parse(localStorage.getItem('@cart')) || []

        const newCart = cart.filter(item => item.id !== product.id)

        localStorage.setItem('@cart', JSON.stringify(newCart))

        dispatch(removeProduct(newCart))
    }
}