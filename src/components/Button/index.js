import styled from 'styled-components';
import { button } from '../../styles'

const ButtonCard = styled.div`
  ${button}
`
function Button(props) {
  const handler = () => {
    if(!Number(props.title)){
      console.log("Do math", props.title)
    } else {
      console.log("Its a Digit", props.title)
    }
  }
  
  return  <ButtonCard onClick={()=>handler()} size={props.size}>
            {props.title ? props.title : null }
          </ButtonCard>
}

export default Button;
