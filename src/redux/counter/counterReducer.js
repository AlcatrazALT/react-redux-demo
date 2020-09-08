import { INCREASE_VALUE, DECREASE_VALUE, RESET_VALUE } from './counterTypes'

const initialCounterState = {
  counterValue: 5,
}

const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case INCREASE_VALUE:
      return {
        ...state,
        counterValue: state.counterValue + 1,
      }
    case DECREASE_VALUE:
      return {
        ...state,
        counterValue: state.counterValue - 1,
      }
    case RESET_VALUE:
      return {
        ...state,
        counterValue: (state.counterValue = 0),
      }
    default:
      return state
  }
}

export default counterReducer
