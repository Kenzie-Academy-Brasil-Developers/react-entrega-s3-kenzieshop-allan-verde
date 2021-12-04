import { ADD_PRODUCT, REMOVE_PRODUCT } from './actionTypes'

const carrinho = JSON.parse(localStorage.getItem('@cart')) || []

const carrinhoReducer = (state = carrinho, action) => {

    const { product, newList } = action

    switch (action.type) {
        case REMOVE_PRODUCT: 
            return newList

        case ADD_PRODUCT:
            return [...state, product]
        
        default: 
            return state
    }
}

export default carrinhoReducer