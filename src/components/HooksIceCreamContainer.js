import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyIceCream } from '../redux'

function HooksIceCreamContainer() {
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of ice cream - {numOfIceCream}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy Cake</button>
    </div>
  )
}

export default HooksIceCreamContainer
