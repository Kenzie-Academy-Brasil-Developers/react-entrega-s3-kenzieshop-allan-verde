import { createStore, combineReducers } from 'redux'

import carrinhoReducer from './modules/cart/reducer'

const reducers = combineReducers({ products: carrinhoReducer })

const store = createStore(reducers)

export default store