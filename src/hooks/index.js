import React, { useState, useRef, useContext, useEffect} from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../context'
import { 
  SET_COMPUTATION,
  SET_RESULT,
  SET_COMPUTATION_PERCENTAGE,
  EQUALS,
  COMMA,
  PERCENTAGE,
  PLUSMINUS,
  SET_PLUS_MINUS,
  CLEAR,
  SET_CLEAR,
  PLUS,
  MINUS,
  MULTIPLY,
  DIVIDE,
  CLEAR_ALL,
  SET_CURRENT_OPERATOR
} from '../utils/enums'
import { displayInput , displayEquation} from '../styles'

const DisplayInput = styled.input`
  ${displayInput}
  text-align: ${props => props.align};
  `
const DisplayEquation = styled.div`
  ${displayEquation}
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
    const input = <DisplayInput
                    align={value ? "right"  :  "left"}
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
  useEffect(() => {
    if(state){
      setValue(<DisplayEquation>{state.computation}</DisplayEquation>)
    }
  }, [state, setValue])

  return [value, inputRef];
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
      case COMMA:
        dispatch({
          type: SET_COMPUTATION,
          payload: title
        });
        break;
      case PERCENTAGE:
        if(!state.computation.includes(EQUALS)){
          dispatch({
            type: SET_COMPUTATION_PERCENTAGE,
            payload: title
          });
        }
        break;
      case PLUSMINUS:
        dispatch({
          type: SET_PLUS_MINUS,
          payload: title
        });
        break;  
      case EQUALS:
        if(state.computation && state.result){
          if(!state.computation.includes(EQUALS)){
            dispatch({
              type: SET_RESULT,
              payload: title
            });
          }
        }
        break;
      default:
        if(!Number(title)) {

          if(state.computation.includes(EQUALS)){
            dispatch({
              type: SET_CLEAR,
              payload: CLEAR_ALL
            });
            dispatch({
              type: SET_COMPUTATION,
              payload: state.result
            });
          }

          if(state.currentOperator.length === 0) {
            dispatch({
              type: SET_COMPUTATION,
              payload: mathOperators(title)
            });
            dispatch({
              type: SET_CURRENT_OPERATOR,
              payload: mathOperators(title)
            });
          }

      } else {
        if(state.computation.includes(EQUALS)){
          dispatch({
            type: SET_CLEAR,
            payload: CLEAR_ALL
          });
        }
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
