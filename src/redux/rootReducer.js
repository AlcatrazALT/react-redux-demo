import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import counterReducer from './counter/counterReducer'
import { useReducer } from 'react'

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  counter: counterReducer,
  user: useReducer,
})

export default rootReducer
