import styled from 'styled-components';
import { button } from '../../styles'
import { useButton } from '../../hooks'
import {EQUALS} from '../../utils/enums'
const ButtonCard = styled.div`
  ${button}
  font-weight: ${props => props.id ===  EQUALS ? "bold" : "300" }
`
function Button(props) {
  const { id, size } = props;
  const [handler] = useButton(id)
  return  <ButtonCard id={id} onClick={() => handler()} size={size}>
            {props.id ? props.id : null }
          </ButtonCard>
}
export default Button;
