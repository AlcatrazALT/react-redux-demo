import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import counterReducer from './counter/counterReducer'
import userReducer from './user/userReducer'

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  counter: counterReducer,
  users: userReducer,
})

export default rootReducer
