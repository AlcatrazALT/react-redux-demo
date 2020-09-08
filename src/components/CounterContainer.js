import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increaseValue, decreaseValue, resetValue } from '../redux'

function Counter() {
  const counter = useSelector((state) => state.counter.counterValue)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Counter {counter}</h2>
      <button onClick={() => dispatch(increaseValue())}>increase</button>
      <button onClick={() => dispatch(decreaseValue())}>decrease</button>
      <button onClick={() => dispatch(resetValue())}>reset</button>
    </div>
  )
}

export default Counter
