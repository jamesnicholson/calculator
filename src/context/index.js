import { createContext, useReducer } from 'react'
import reducer from '../reducers'

const initialState = {
    currentOperator: "",
    computation: "",
    result:""
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return  <GlobalContext.Provider value={{state, dispatch}}>
                {props.children}
            </GlobalContext.Provider>
}
export default GlobalProvider;