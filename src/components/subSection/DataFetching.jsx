import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'

export default function DataFetching() {
  const numOfCakes = useSelector(state => state.numOfCakes);
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Number of cakes: { numOfCakes }</h2>
      <button onClick={() => dispatch(buyCake())}>Buy new Cake</button>
    </div>
  )
}
