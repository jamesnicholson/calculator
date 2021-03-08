import { evaluate } from 'mathjs'
import { mathOperators } from '../utils/helpers'
import {
    SET_COMPUTATION,
    SET_RESULT,
    SET_CLEAR,
    SET_CURRENT_OPERATOR,
    SET_RESET_CURRENT_NUMBER,
    SET_COMPUTATION_PERCENTAGE,
    SET_BACKSPACE,
    PERCENTAGE
} from '../utils/enums'

const setComputation = (payload, state) => {
    let formatedPayload = payload
    if(!Number(payload)) {
        formatedPayload = mathOperators(payload)
    }
    return {
        ...state,
        computation: state.computation + formatedPayload,
        equationExecuted: false,
        currentNumber: state.currentNumber + payload,
        result: state.result + payload
    };
};
const setResultPercentage = (payload, state) => {
    return {
        ...state,
        result: state.result+payload,
        equationExecuted: true,
        computation: state.computation + payload,
    };
};
const setResult = (payload, state) => {
    let formateComputation = state.computation.replace(PERCENTAGE, "/100");
    return {
        ...state,
        result: evaluate(formateComputation),
        equationExecuted: true,
        computation: state.computation + payload,
    };
};
const setBackspace = (state) => {
    return {
        ...state,
        result: state.result.slice(0, -1) ,
        currentNumber: state.currentNumber.slice(0, -1) ,
        computation: state.computation.slice(0, -1) ,
    };
};
const setCurrentOperator = (payload, state) => {
    return {
        ...state,
        currentOperator: payload
    };
};
const setClear = (state) => {
    return {
        ...state,
        computation: "",
        result: "",
        currentNumber: "",
    };
};
const setResetCurrentNumber = (state) => {
    return {
        ...state,
        currentNumber: "",
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
        case SET_RESET_CURRENT_NUMBER :
            return setResetCurrentNumber(state);
        case SET_CLEAR :
            return setClear(state);
        case SET_COMPUTATION_PERCENTAGE :
            return setResultPercentage(action.payload, state);
        case SET_BACKSPACE :
            return setBackspace(state);
        default : 
           return state;
    };
};
export default reducer;
