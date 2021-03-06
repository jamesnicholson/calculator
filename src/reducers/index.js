import { SET_COMPUTATION, SET_RESULT, SET_CLEAR, CLEAR_ALL, CLEAR_INPUT , SET_CURRENT_OPERATOR} from '../utils/enums'
import { evaluate } from 'mathjs'
const setComputation = (payload, state) => {
    return {
        ...state,
        computation: state.computation + payload,
        result:  state.computation + payload
    };
};
const setResult = (payload, state) => {
    
    return {
        ...state,
        result: evaluate(state.computation),
    };
};
const setCurrentOperator = (payload, state) => {
    console.log(payload)
    return {
        ...state,
        currentOperator: payload
    };
};
const setClear = (payload, state) => {
    
        switch(payload){
            case CLEAR_ALL:
                console.log(CLEAR_ALL)
                return {
                    ...state,
                    computation: "",
                    result: 0, 
                };
            case CLEAR_INPUT:
                return {
                    ...state,
                    //result: 0, 
                };
            default:
                break;
        }
   
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
