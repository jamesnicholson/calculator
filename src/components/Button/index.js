import { useContext } from "react";
import styled from 'styled-components';
import { button } from '../../styles'
import { GlobalContext } from '../../context'

const ButtonCard = styled.div`
  ${button}
`
function Button(props) {
  const [ state, dispatch, action] = useContext(GlobalContext);
  return  <ButtonCard onClick={() => {action.buttonType(props.title)}} size={props.size}>
            {props.title ? props.title : null }
          </ButtonCard>
}
export default Button;
