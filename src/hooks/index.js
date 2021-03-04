import React, { useState, useRef} from 'react'
import styled from 'styled-components'
import { display } from '../styles'

const Display = styled.input`
  ${display}
  `
export const useInput = () => {
    const [value, setValue] = useState("");
    const inputRef = useRef(null)
    const input = <Display
                    value={value}
                    ref={inputRef}
                    onChange={e => setValue(e.target.value)}
                    type="text"
                    placeholder="hello.."
                />;
    return [value, input, inputRef];
};