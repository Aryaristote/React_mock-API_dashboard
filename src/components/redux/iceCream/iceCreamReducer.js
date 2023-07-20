import { BUY_ICECREAM } from "./iceCreamTypes"

const initialState = {
    numOficeCream: 20,
}

const iceCreamReducer = (state = initialState, actions) => {
    switch(actions.type){
        case BUY_ICECREAM: return {
            ...state,
            numOficeCream: state.numOficeCream - 1,
        }
        default: return state
    }
}

export default iceCreamReducer

