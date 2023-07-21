import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'
import { buyIceCream } from '../redux'

export default function DataFetching() {
  const numOfCakes = useSelector(state => state.cake.numOfCakes);
  const dispatch = useDispatch()

  const numOfIcecream = useSelector(state => state.iceCream.numOfIcecream);
  const dispatch2 = useDispatch() 

  return (
    <div>
      <h2>Number of cakes: { numOfCakes }</h2>
      <button onClick={() => dispatch2(buyCake())}>Buy new Cake</button>

      <hr />
      <h2>Number of icecream: { numOfIcecream }</h2> 
      <button onClick={() => dispatch(buyIceCream())}>Buy Icecream</button>
    </div>
  )
}
