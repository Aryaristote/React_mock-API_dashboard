import { BUY_ICECREAM } from "./iceCreamTypes"

const initialState = {
    numOfIcecream: 20,
}

const iceCreamReducer = (state = initialState, actions) => {
    switch(actions.type){
        case BUY_ICECREAM: return {
            ...state,
            numOfIcecream: state.numOfIcecream - 1,
        }
        default: return state
    }
}

export default iceCreamReducer

