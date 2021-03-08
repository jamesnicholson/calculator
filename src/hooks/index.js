import React, { useState, useRef, useContext, useEffect} from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../context'
import { displayInput , displayEquation} from '../styles'
import { mathOperators }  from '../utils/helpers'
import { 
  SET_COMPUTATION,
  SET_RESULT,
  SET_RESET_CURRENT_NUMBER,
  SET_COMPUTATION_PERCENTAGE,
  EQUALS,
  COMMA,
  ZERO,
  PERCENTAGE,
  BACKSPACE,
  SET_BACKSPACE,
  CLEAR,
  SET_CLEAR,
  SET_CURRENT_OPERATOR
} from '../utils/enums'

const DisplayInput = styled.input`
  ${displayInput}
  text-align: ${props => props.align};
  `
const DisplayEquation = styled.div`
  ${displayEquation}
  `
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
  let currentNumber = "";
  const handler = () => {
    switch(title) {
      case CLEAR:
        dispatch({
          type: SET_CLEAR
        });
        break;
      case COMMA:
        currentNumber = state.currentNumber
       if(!currentNumber.includes(title)) {
          if(currentNumber.length !== 0){
            dispatch({
              type: SET_COMPUTATION,
              payload: title
            });
          }
        }
        break;
      case ZERO:
        currentNumber =  state ? state.currentNumber : ""
        if((currentNumber.charAt(0) !== ZERO)){
          dispatch({
            type: SET_COMPUTATION,
            payload: title
          });
        }else{
          if(currentNumber.substring(0, 2) === (ZERO+COMMA)){
            dispatch({
              type: SET_COMPUTATION,
              payload: title
            });
          }
        }
        break;
      case PERCENTAGE:
        if(!state.computation.includes(EQUALS)){
          dispatch({
            type: SET_COMPUTATION_PERCENTAGE,
            payload: title
          });
        }
        break;
      case BACKSPACE:
        if(state.equationExecuted){
          dispatch({
            type: SET_CLEAR
          });
        }else{
          dispatch({
            type: SET_BACKSPACE
          });
        }
        break;  
      case EQUALS:
        let theEquation = state ? state.computation: 0;
        if(theEquation && state.result){
          let lastCharacter = theEquation.substring(theEquation.length -1, theEquation.length)
          if(Number(lastCharacter) || lastCharacter === ZERO || lastCharacter === PERCENTAGE){
            if((!theEquation.includes(EQUALS))){
              dispatch({
                type: SET_RESULT,
                payload: title
              });
            }
          }
        }
        break;
      default:
        if(!Number(title)) {
           // The MATHS OPERATOR Handler
          if(state.computation.includes(EQUALS)){
            dispatch({
              type: SET_CLEAR
            });
            dispatch({
              type: SET_COMPUTATION,
              payload: state.result
            });
          }
          if(state.currentOperator.length === 0) {
            dispatch({
              type: SET_COMPUTATION,
              payload: title
            });
            dispatch({
              type: SET_CURRENT_OPERATOR,
              payload: mathOperators(title)
            });
            dispatch({
              type: SET_RESET_CURRENT_NUMBER
            });
          }

      } else {
        // The DIGIT Handler
        if(state.computation.includes(EQUALS)){
          dispatch({
            type: SET_CLEAR
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
