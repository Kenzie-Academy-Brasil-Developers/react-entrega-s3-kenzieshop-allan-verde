export const addProduct = (product) => {
    return {
        type: 'ADD_PRODUCT',
        product
    }
}

export const removeProduct = (product) => ({ type: 'REMOVE_PRODUCT', product })