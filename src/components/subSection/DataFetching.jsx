import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';

function DataFetching(props) {
  return (
    <div>
      <h1><b>Number of cakes: {props.numOfCakes}</b></h1>
      <button onClick={props.buyCake}>Buy a Cake</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(DataFetching)
