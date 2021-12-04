import { createStore, combineReducers, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

import carrinhoReducer from './modules/cart/reducer'

const reducers = combineReducers({ products: carrinhoReducer })

const store = createStore(reducers, applyMiddleware(thunk))

export default store