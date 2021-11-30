const carrinho = []

const carrinhoReducer = (state = carrinho, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            const { product } = action
            return [...state, product]
        default: 
            return state
    }
}

export default carrinhoReducer