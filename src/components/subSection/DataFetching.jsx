import { buyCake } from '../redux/index';
import React, { useEffect, useState } from 'react';

function DataFetching() {
  return (
    <div>
      <h1><b>Number of cakes: 30</b></h1>
      <button>Buy a Cake</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfCakes: state.numOfCakes 
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  }
}

export default (mapStateToProps, mapDispatchToProps)(DataFetching)
