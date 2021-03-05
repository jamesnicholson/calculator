import React, { useState, useRef, useContext, useEffect} from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../context'

import { display } from '../styles'

const Display = styled.input`
  ${display}
  `
  
export const useInput = () => {
    const [state] = useContext(GlobalContext);
    const [value, setValue] = useState("");
    const inputRef = useRef(null)
    const input = <Display
                    value={value}
                    ref={inputRef}
                    onChange={e => setValue(e.target.value)}
                    type="text"
                    placeholder="hello.."
                />;

    useEffect(() => {
      console.log(state)
      setValue(state.result)
    }, [state, setValue])

    return [value, input, inputRef];
};
