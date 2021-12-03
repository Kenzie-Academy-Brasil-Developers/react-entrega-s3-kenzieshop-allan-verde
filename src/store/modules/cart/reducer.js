const carrinho = []

const carrinhoReducer = (state = carrinho, action) => {
    console.log(action.product)
    const { product } = action
    switch (action.type) {
        case 'REMOVE_PRODUCT': 
            console.log('teste')
            return state.filter(item => item.id !== product.id)

        case 'ADD_PRODUCT':
            console.log('teste')
            return [...state, product]
        
        default: 
            return state
    }
}

export default carrinhoReducer