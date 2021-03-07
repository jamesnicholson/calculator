import {
    SET_COMPUTATION,
    SET_RESULT,
    SET_CLEAR,
    SET_CURRENT_OPERATOR,
    SET_COMPUTATION_PERCENTAGE,
    SET_PLUS_MINUS
} from '../utils/enums'
import { evaluate } from 'mathjs'

const setComputation = (payload, state) => {

    return {
        ...state,
        computation: state.computation + payload,
        equationExecuted: false,
        result: state.currentOperator.length > 0 ? payload : state.result + payload
    };
};
const setResultPercentage = (payload, state) => {
    const computation  =  evaluate(state.computation);
    console.log(computation)
    return {
        ...state,
        result: evaluate(state.computation)/100,
        equationExecuted: true,
        computation: state.computation + payload,
    };
};
const setResult = (payload, state) => {

    return {
        ...state,
        result: evaluate(state.computation),
        equationExecuted: true,
        computation: state.computation + payload,
    };
};
const setPlusMinus = (payload, state) => {
    return {
        ...state,
        result: -(state.result),
        computation: state.computation,
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
        case SET_COMPUTATION_PERCENTAGE :
            return setResultPercentage(action.payload, state);
        case SET_PLUS_MINUS :
            return setPlusMinus(action.payload, state);
        default : 
           return state;
    };
};
export default reducer;
