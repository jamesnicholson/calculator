import { SET_COMPUTATION, SET_RESULT, SET_CLEAR } from '../utils/enums'
import { evaluate } from 'mathjs'
const setComputation = (payload, state) => {
    return {
        ...state,
        computation: state.computation + payload
    };
};
const setResult = (payload, state) => {
    
    return {
        ...state,
        result: evaluate(state.computation),
    };
};
const setClear = (state) => {
    return {
        ...state,
        computation: "",
        result: 0,
    };
};


const reducer = (state, action) => {
    switch(action.type){
        case SET_COMPUTATION :
            return setComputation(action.payload, state);
        case SET_RESULT :
                return setResult(action.payload, state);
        case SET_CLEAR :
                return setClear(state);
        default : 
           return state;
    };
};
export default reducer;
