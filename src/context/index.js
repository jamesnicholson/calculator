import { createContext } from 'react'

const inititalState = {
    value: 0,
};
const GlobalContext = createContext(inititalState);

const GlobalProvider = (props) => {

    return  <GlobalContext.Provider value={inititalState}>
                {props.children}
            </GlobalContext.Provider>
}
export default GlobalProvider;