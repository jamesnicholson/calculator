import { SET_COMPUTATION, SET_RESULT, SET_CLEAR, SET_CURRENT_OPERATOR } from '../utils/enums'
import { evaluate } from 'mathjs'
const setComputation = (payload, state) => {
    return {
        ...state,
        computation: state.computation + payload,
        result: state.currentOperator.length > 0 ? payload : state.result + payload
    };
};
const setResult = (payload, state) => {
    return {
        ...state,
        result: evaluate(state.computation),
    };
};
const setCurrentOperator = (payload, state) => {
    return {
        ...state,
        currentOperator: payload
    };
};
const setClear = (payload, state) => {
    return {
        ...state,
        computation: "",
        result: "", 
    };
};


const reducer = (state, action) => {
    switch(action.type){
        case SET_COMPUTATION :
            return setComputation(action.payload, state);
        case SET_RESULT :
            return setResult(action.payload, state);
        case SET_CURRENT_OPERATOR :
            return setCurrentOperator(action.payload, state);
        case SET_CLEAR :
            return setClear(action.payload, state);
        default : 
           return state;
    };
};
export default reducer;
