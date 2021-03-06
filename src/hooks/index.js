import React, { useState, useRef, useContext, useEffect} from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../context'
import { SET_COMPUTATION, SET_RESULT, EQUALS, CLEAR, SET_CLEAR, PLUS, MINUS, MULTIPLY, DIVIDE, CLEAR_ALL, SET_CURRENT_OPERATOR } from '../utils/enums'
import { display } from '../styles'

const Display = styled.input`
  ${display}
  `
  function mathOperators(operator){
    switch(operator){
        case PLUS:
            return "+";
        case MINUS:
            return "-";
        case MULTIPLY:
            return "*";
        case DIVIDE:
            return "/";
        default : 
            return operator;
      }
}

export const useInput = () => {
    const {state} = useContext(GlobalContext);
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
      if(state){
        setValue(state.result)
      }
    }, [state, setValue])

    return [input, inputRef];
};

export const useDisplay = () => {
  const {state} = useContext(GlobalContext);
  const [value, setValue] = useState("");
  const inputRef = useRef(null)
  const display = <div>{value}</div>
  useEffect(() => {
    if(state){
      setValue(state.computation)
    }
  }, [state, setValue])

  return [display, inputRef];
};

export const useButton = (title) => {
  const {state, dispatch} = useContext(GlobalContext);
  const handler = () => {
    switch(title) {
      case CLEAR:
        dispatch({
          type: SET_CLEAR,
          payload: CLEAR_ALL
        });
        break;
      case EQUALS:
        dispatch({
          type: SET_RESULT,
          payload: title
        });
        break;
      default:
        if(!Number(title)) {
          if(state.currentOperator.length === 0) {
            dispatch({
              type: SET_COMPUTATION,
              payload: mathOperators(title)
            });
            dispatch({
              type: SET_CURRENT_OPERATOR,
              payload: mathOperators(title)
            });
          }else{
              return null;
          }
          
      } else {
          dispatch({
              type: SET_COMPUTATION,
              payload: title
          });
          dispatch({
              type: SET_CURRENT_OPERATOR,
              payload: ""
          });
      }
      break;
    }
  };
  return [handler];
};
