import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducers'
import iceCreamReducer from './iceCream/iceCreamReducers'
import counterReducer from './counter/counterReducer'

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  counter: counterReducer,
})

export default rootReducer
