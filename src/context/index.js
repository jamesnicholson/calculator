import { createContext, useReducer, useMemo } from 'react'
import { SET_COMPUTATION, SET_RESULT, EQUALS, CLEAR, SET_CLEAR, ADD, SUBTRACT, MULTIPLY, DIVIDE } from '../utils/enums'
import reducer from '../reducers'

const initialState = {
    computation: "",
    result:0
};
function mathOperators(operator){
    switch(operator){
        case ADD:
            return "+";
        case SUBTRACT:
            return "-";
        case MULTIPLY:
            return "*";
        case DIVIDE:
            return "/";
        default : 
            return operator;
      }
}

export const GlobalContext = createContext(initialState);
export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const actions = useMemo(() => ({
        buttonType: (title) => {
            switch(title){
                case CLEAR:
                  return dispatch({
                      type: SET_CLEAR
                    })
                case EQUALS:
                  return dispatch({
                    type: SET_RESULT,
                    payload: title
                  });
                default : 
                    if(!Number(title)){
                        return dispatch({
                            type: SET_COMPUTATION,
                            payload: mathOperators(title)
                        });
                    }else{
                        return dispatch({
                            type: SET_COMPUTATION,
                            payload: title
                        });
                    }
            }
        }
    }), []);

    return  <GlobalContext.Provider value={[state, dispatch, actions]}>
                {props.children}
            </GlobalContext.Provider>
}
export default GlobalProvider;